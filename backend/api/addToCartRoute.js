import express from "express";
import CartAdd from "./addToCartController.js";
import CartGet from "./getCartController.js";
import CartRemove from "./removeCartController.js";

const router = express.Router();

router.route("/api/addCart").post(CartAdd.apiAddToCart);
router.route("/api/add1Cart").post(CartGet.apiGetCart);
router.route("/api/removeCart").post(CartRemove.apiRemoveCart);

export default router;
