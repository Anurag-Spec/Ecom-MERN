import UserDAO from "../DAO/userDAO.js";

export default class UsersCtrl {
  static async apiGetUsers(req, res, next) {
    const usersPerPage = req.query.usersPerPage
      ? parseInt(req.query.usersPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.name) {
      filters.brannamed = req.query.name;
    } else if (req.query.email) {
      filters.email = req.query.email;
    } else if (req.query.id) {
      filters.id = req.query.id;
    }

    const { userList, totalNumUsers } = await UserDAO.getUsers({
      filters,
      page,
      usersPerPage,
    });

    let response = {
      users: userList,
      page: page,
      filters: filters,
      entries_per_page: usersPerPage,
      total_results: totalNumUsers,
    };
    res.json(response);
  }
}
