import mongodb from "mongodb";

export default class WishListAdd {
  static async apiAddToWishList(req, res, next) {
    const { id, email } = req.body;

    const MongoClient = mongodb.MongoClient;
    MongoClient.connect(process.env.ECOM_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      })
      .then(async (client) => {
        const db = client.db("Main");
        db.collection("user")
          .findOne({ email })
          .then((user) => {
            if (user) {
              db.collection("products")
                .findOne({ id })
                .then((product) => {
                  db.collection("wishlist")
                    .findOne({ user: email })
                    .then((wishUser) => {
                      if (wishUser) {
                        let wishId = wishUser.products.map(
                          (singProd) => singProd.id
                        );
                        if (wishId.includes(id)) {
                          db.collection("cart")
                            .findOne({ user: email })
                            .then((updatedQuant) => {
                              res.json(updatedQuant.products);
                            });
                        } else {
                          db.collection("wishlist")
                            .updateOne(
                              { user: email },
                              {
                                $set: {
                                  products: [...wishUser.products, product],
                                },
                              }
                            )
                            .then(res.json("prod update"));
                        }
                      } else {
                        db.collection("wishlist")
                          .insertOne({
                            user: user.email,
                            products: [product],
                          })

                          .then(res.json("product added to Wishlist"))
                          .then(res.status("200"));
                      }
                    });
                });
            }
          });
      });
  }
}
