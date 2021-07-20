import express from "express";
import Controller from "../controller/Product";

const router = express.Router({ mergeParams: true });

router.get("/", Controller.index);
router.post("/", Controller.create);
router.put("/:ItemId", Controller.update);
router.delete("/:ItemId", Controller.destroy);

export default router;
