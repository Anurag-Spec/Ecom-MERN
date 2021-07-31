import express from "express";
import UsersCtrl from "./users.controller.js";
import UsersAdd from "./adduser.controller.js";

const router = express.Router();

router.route("/api/users").get(UsersCtrl.apiGetUsers);

router.route("/api/users").post(UsersAdd.apiAddUsers);

export default router;
