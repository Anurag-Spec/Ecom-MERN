import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import ProductsDAO from "./DAO/productsDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.ECOM_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .then(async (client) => {
    await ProductsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
