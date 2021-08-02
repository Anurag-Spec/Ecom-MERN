import mongodb from "mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class Auth {
  static async apiAuth(req, res, next) {
    const { email, password } = req.body;

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
            if (!user) {
              return res.status(400).json({ msg: "user does not exist" });
            } else {
              bcrypt.compare(password, user.password).then((isMatch) => {
                if (!isMatch) {
                  return res.status(400).json({ msg: "Invalid Credentials" });
                } else {
                  jwt.sign(
                    {
                      name: user.name,
                    },
                    process.env.JWTSECRET,
                    { expiresIn: 3600 },
                    (err, token) => {
                      if (err) {
                        throw err;
                      } else {
                        res.json({
                          token,
                          user: {
                            name: user.name,
                            email: user.email,
                          },
                        });
                      }
                    }
                  );
                }
              });
            }
          });
      });
  }
}
