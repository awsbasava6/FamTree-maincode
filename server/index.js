import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(cors({
  origin: "*",
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", uploadRoutes);

// Health check
app.get("/api/auth/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is live!" });
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Mongo Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));

