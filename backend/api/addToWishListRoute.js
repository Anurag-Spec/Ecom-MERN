import express from "express";
import WishListAdd from "./addToWishlistController.js";

const router = express.Router();

router.route("/api/addWish").post(WishListAdd.apiAddToWishList);

export default router;
