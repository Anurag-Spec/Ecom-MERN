import express from "express";
import CartAdd from "./addToCartController.js";

const router = express.Router();

router.route("/api/add").post(CartAdd.apiAddToCart);

export default router;
