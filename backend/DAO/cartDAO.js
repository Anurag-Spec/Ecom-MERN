import mongodb from "mongodb";

let cart;

export default class CartDAO {
  static async injectDB(conn) {
    if (cart) {
      return;
    }
    try {
      cart = await conn.db(process.env.PRODUCTS_NS).collection("cart");
    } catch (e) {
      console.error(`Unable to establish a collection handle in userDAO: ${e}`);
    }
  }
}
