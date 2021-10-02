import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;
let users;

export default class UserDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db(process.env.PRODUCTS_NS).collection("user");
    } catch (e) {
      console.error(`Unable to establish a collection handle in userDAO: ${e}`);
    }
  }

  static async getUsers({ filters = null, page = 0, usersPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      } else if ("email" in filters) {
        query = { email: { $eq: filters["email"] } };
      } else if ("id" in filters) {
        query = { id: { $eq: filters["id"] } };
      }
    }

    let cursor;

    try {
      cursor = await users.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { userList: [], totalNumUsers: 0 };
    }

    const displayCursor = cursor.limit(usersPerPage).skip(usersPerPage * page);

    try {
      const userList = await displayCursor.toArray();
      const totalNumUsers = await users.countDocuments(query);

      return { userList, totalNumUsers };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { userList: [], totalNumUsers: 0 };
    }
  }
}
