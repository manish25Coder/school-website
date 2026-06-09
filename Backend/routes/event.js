import express from "express"
import { createEvent, deleteEvent, getEvents,updateEvent } from "../controller/event.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/",authenticateJWT,createEvent)
router.get("/",getEvents)
router.delete("/:id",authenticateJWT,deleteEvent)
router.put("/:id",authenticateJWT,updateEvent)

export default router;
