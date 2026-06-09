import express from "express"
import { createNotice, deleteNotice, getNotices,updateNotice } from "../controller/notice.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/",authenticateJWT,createNotice)
router.get("/",getNotices)
router.delete("/:id",authenticateJWT,deleteNotice)
router.put("/:id",authenticateJWT,updateNotice)

export default router;
