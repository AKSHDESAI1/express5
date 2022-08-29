import express from "express";
import Student from "../controllers/studentControllers.js";

const router = express.Router();

router.get("/", Student.getAllDoc);
router.get("/:id", Student.getSingleDoc);
router.post("/", Student.createDoc);
router.put("/:id", Student.updateDoc);
router.delete("/:id", Student.deleteDoc);

export default router;