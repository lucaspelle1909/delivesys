import express from "express";
import Controller from "../controller/Client";

const router = express.Router({ mergeParams: true });

router.get("/", Controller.index);
router.post("/", Controller.create);
router.put("/:CustAccount", Controller.update);
router.delete("/:CustAccount", Controller.destroy);

export default router;
