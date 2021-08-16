import mongodb from "mongodb";

export default class CartAdd {
  static async apiAddToCart(req, res, next) {
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
                  db.collection("cart")
                    .findOne({ user: email })
                    .then((cartUser) => {
                      if (cartUser) {
                        if ((cartUser.products.id = id)) {
                          db.collection("cart")
                            .updateOne(
                              { id: cartUser.products.id },
                              {
                                $set: {
                                  quantity: 2,
                                },
                              }
                            )
                            .then(res.json("quantity update"));
                        } else {
                          cartUser.products
                            .push(product)
                            .then(res.json("product update"));
                        }
                      } else {
                        product.quantity = 1;
                        db.collection("cart")
                          .insertOne({
                            user: user.email,
                            products: [product],
                          })

                          .then(res.json("product added to Cart"))
                          .then(res.status("200"));
                      }
                    });
                });
            }
          });
      });
  }
}
