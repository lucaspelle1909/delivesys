import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import clientRoutes from './app/router/Client';

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(
  express.urlencoded({ extended: true, limit: "100mb", parameterLimit: 500000 })
);
app.use(cookieParser());

// app.use(require("./app/middlewares/Auth"));
app.use("/clients", clientRoutes);


app.listen(3005);
