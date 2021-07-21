import express from "express";
import Controller from "../controller/SysUser";

const router = express.Router({ mergeParams: true });

router.get("/", Controller.index);
router.post("/", Controller.create);
router.get("/deliveryman", Controller.findDeliveryMan);
// router.post("/deliveryman", Controller.createDeliveryMan);
router.put("/:UserId", Controller.update);
router.delete("/:UserId", Controller.destroy);

export default router;
