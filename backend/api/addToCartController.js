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
                  db.collection("cart").insertOne({
                    user: user,
                    product: product,
                  });
                })
                .then(res.json("product added to Cart"))
                .then(res.status("200"));
            } else {
              res.json("invalid request");
              res.status("400");
            }
          });
      });
  }
}
