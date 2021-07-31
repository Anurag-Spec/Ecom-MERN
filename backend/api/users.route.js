import express from "express";
import UsersCtrl from "./users.controller.js";

const router = express.Router();

router.route("/api/users").get(UsersCtrl.apiGetUsers);

export default router;
