import express from "express";
import upload from "../middleware/upload.js";
import { uploadFile, getUploadUrl } from "../controllers/uploadController.js";

const router = express.Router();

// Option 1 (current)
router.post("/upload", upload.single("file"), uploadFile);

// Option 2 (best practice)
router.get("/upload-url", getUploadUrl);

export default router;

