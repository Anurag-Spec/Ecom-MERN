import express from "express";
import cors from "cors";
import products from "./api/products.route.js";
import users from "./api/users.route.js";
import cart from "./api/addToCartRoute.js";
import wish from "./api/addToWishListRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", products);
app.use("/", users);
app.use("/", cart);
app.use("/", wish);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
