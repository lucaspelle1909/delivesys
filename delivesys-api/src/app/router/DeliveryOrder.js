import express from "express";
import Controller from "../controller/DeliveryOrder";

const router = express.Router({ mergeParams: true });

router.get("/", Controller.index);
router.post("/", Controller.create);
router.put("/:DeliveryId", Controller.update);
router.delete("/:DeliveryId", Controller.destroy);

export default router;
