import mongodb from "mongodb";

export default class CartGet {
  static async apiGetCart(req, res, next) {
    const { email } = req.body;

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
        db.collection("cart")
          .findOne({ user: email })
          .then((user) => {
            if (user) {
              res.json(user.products);
              res.status(200);
            } else {
              res.json("no products added");
            }
          });
      });
  }
}
