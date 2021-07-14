import express from "express";
import Controller from "../controller/DeliveryCompany";

const router = express.Router({ mergeParams: true });

router.get("/", Controller.index);

export default router;
