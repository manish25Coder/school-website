import express from "express"
import { createTeacher, deleteTeacher, getTeachers,updateTeacher } from "../controller/teacher.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/",authenticateJWT,createTeacher)
router.get("/",getTeachers)
router.delete("/:id",authenticateJWT,deleteTeacher)
router.put("/:id",authenticateJWT,updateTeacher)

export default router;
