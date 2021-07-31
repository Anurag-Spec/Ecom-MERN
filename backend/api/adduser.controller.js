import mongodb from "mongodb";
import bcrypt from "bcryptjs";

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
        db.collection("user")
          .findOne({ email })
          .then((user) => {
            if (user) {
              return res.status(400).json({ msg: "user already exixts" });
            } else {
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                  if (err) {
                    throw err;
                  } else {
                    db.collection("user").insertOne({
                      email: email,
                      name: name,
                      password: hash,
                    });
                  }
                });
              });
            }
          });
      });
  }
}
