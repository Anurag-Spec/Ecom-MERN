import express from "express";
import WishListAdd from "./addToWishlistController.js";
import WishListGet from "./getWishListController.js";

const router = express.Router();

router.route("/api/addWish").post(WishListAdd.apiAddToWishList);
router.route("/api/add1Wish").post(WishListGet.apiGetWishList);

export default router;
