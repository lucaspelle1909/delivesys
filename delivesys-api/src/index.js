import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";


import bcrypt from 'bcrypt';
import sysUserRoutes from './app/router/SysUser';
import productRoutes from './app/router/Product';
import AuthController from "./app/controller/Auth";

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(
  express.urlencoded({ extended: true, limit: "100mb", parameterLimit: 500000 })
);
app.use(cookieParser());

app.post("/auth", AuthController.auth);

app.use(require("./app/middlewares/Auth"));
app.use("/sysusers", sysUserRoutes);
app.use("/products", productRoutes);

// generate hash
app.post("/hash", (req, res) => {

  const salt = bcrypt.genSaltSync(8);
  const password = bcrypt.hashSync(req.body.term, salt);

  res.status(200).json(password);

});

app.listen(3005);
