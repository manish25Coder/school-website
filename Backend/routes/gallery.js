import express from "express"
import { createGallery, deleteGallery, getGallerys,updateGallery } from "../controller/gallery.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/",authenticateJWT,createGallery)
router.get("/",getGallerys)
router.delete("/:id",authenticateJWT,deleteGallery)
router.put("/:id",authenticateJWT,updateGallery)

export default router;
