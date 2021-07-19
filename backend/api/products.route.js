import express from "express";
import ProductsCtrl from "./products.controller.js";

const router = express.Router();

router.route("/api/products").get(ProductsCtrl.apiGetProducts);

export default router;
