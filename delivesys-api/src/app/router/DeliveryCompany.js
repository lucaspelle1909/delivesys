import express from "express";
import Controller from "../controller/DeliveryCompany";

const router = express.Router({ mergeParams: true });

router.get("/", Controller.index);
router.post("/", Controller.create);
router.put("/:deliveryCompanyId", Controller.update);
router.delete("/:deliveryCompanyId", Controller.destroy);

export default router;
