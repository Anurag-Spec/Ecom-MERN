import mongodb from "mongodb";

export default class CartRemove {
  static async apiRemoveCart(req, res, next) {
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
            db.collection("products")
              .findOne({ id })
              .then((product) => {
                db.collection("cart")
                  .findOne({ user: email })
                  .then((userPresent) => {
                    if (userPresent) {
                      let cartQuant = userPresent.products.filter(
                        (item) => item.id === id.toString()
                      );
                      if (cartQuant[0]?.quantity > 1) {
                        db.collection("cart")
                          .findOneAndUpdate(
                            { user: email },
                            {
                              $inc: {
                                "products.$[elem].quantity": -1,
                              },
                            },
                            { arrayFilters: [{ "elem.id": id.toString() }] }
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
                              $pull: { products: { id: id.toString() } },
                            }
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
                    }
                  });
              });
          });
      });
  }
}
