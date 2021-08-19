import mongodb from "mongodb";

export default class CartAdd {
  static async apiAddToCart(req, res, next) {
    const { id, email } = req.body;
    const newID = id.toString();
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
            db.collection("products")
              .findOne({ id })
              .then((product) => {
                db.collection("cart")
                  .findOne({ user: email })
                  .then((userPresent) => {
                    if (userPresent) {
                      let cartId = userPresent.products.map(
                        (singProd) => singProd.id
                      );
                      if (cartId.includes(id)) {
                        db.collection("cart")
                          .findOneAndUpdate(
                            { user: email },
                            {
                              $inc: {
                                "products.$[elem].quantity": 1,
                              },
                            },
                            { arrayFilters: [{ "elem.id": id }] }
                          )
                          .then(
                            db
                              .collection("cart")
                              .findOne({ user: email })
                              .then((updatedQuant) => {
                                res.json(updatedQuant.products);
                              })
                          );
                      } else {
                        db.collection("cart")
                          .updateOne(
                            { user: email },
                            {
                              $set: {
                                products: [...userPresent.products, product],
                              },
                            }
                          )
                          .then(
                            db.collection("cart").findOneAndUpdate(
                              { user: email },
                              {
                                $inc: {
                                  "products.$[elem].quantity": 1,
                                },
                              },
                              { arrayFilters: [{ "elem.id": { $gte: id } }] }
                            )
                          )
                          .then(
                            db
                              .collection("cart")
                              .findOne({ user: email })
                              .then((updatedProd) => {
                                res.json(updatedProd.products);
                              })
                          );
                      }
                    } else {
                      product.quantity = 1;
                      db.collection("cart")
                        .insertOne({
                          user: user.email,
                          products: [product],
                        })

                        .then(
                          db
                            .collection("cart")
                            .findOne({ user: email })
                            .then((addedProd) => {
                              res.json(addedProd.products);
                            })
                        )
                        .then(res.status("200"));
                    }
                  });
              });
          });
      });
  }
}
