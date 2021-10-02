import mongodb from "mongodb";

export default class WishListRemove {
  static async apiRemoveWishList(req, res, next) {
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
                db.collection("wishlist")
                  .findOne({ user: email })
                  .then((userPresent) => {
                    db.collection("wishlist")
                      .updateOne(
                        { user: email },
                        {
                          $pull: { products: { id: id.toString() } },
                        }
                      )

                      .then(
                        db
                          .collection("wishlist")
                          .findOne({ user: email })
                          .then((updatedProd) => {
                            res.json(updatedProd.products);
                          })
                      );
                  });
              });
          });
      });
  }
}
