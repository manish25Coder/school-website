import express from "express"
import { createContact, deleteContact, getContacts } from "../controller/contact.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/",createContact)
router.get("/",authenticateJWT,getContacts)
router.delete("/:id",authenticateJWT,deleteContact)
// router.put("/",(req,res)=>{ })

export default router;
