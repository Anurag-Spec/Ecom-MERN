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
                        let cartId = cartUser.products.map(
                          (singProd) => singProd.id
                        );

                        let cartQuant = cartUser.products.map(
                          (singProd) => singProd.quantity
                        );
                        if (cartId.includes(id)) {
                          product.quantity = parseInt(cartQuant) + 1;
                          db.collection("cart")
                            .updateOne(
                              { user: email },
                              { $pull: { products: { id: id } } }
                            )

                            .then(
                              db
                                .collection("cart")
                                .findOne({ user: email })
                                .then((cartProd) => {
                                  db.collection("cart").updateOne(
                                    { user: email },
                                    {
                                      $set: {
                                        products: [
                                          ...cartProd.products,
                                          product,
                                        ],
                                      },
                                    }
                                  );
                                })
                            )
                            .then(res.json("quant update"));
                        } else {
                          product.quantity = 1;
                          db.collection("cart")
                            .updateOne(
                              { user: email },
                              {
                                $set: {
                                  products: [...cartUser.products, product],
                                },
                              }
                            )
                            .then(res.json("prod update"));
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
