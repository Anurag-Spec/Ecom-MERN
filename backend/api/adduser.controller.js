import mongodb from "mongodb";

export default class UsersAdd {
  static async apiAddUsers(req, res, next) {
    const { name, email, password } = req.body;

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
        db.collection("user").insertOne({
          email: email,
          name: name,
          password: password,
        });
      });
    res.send("success");
  }
}
