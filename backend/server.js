import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./Routes/userRoute.js";
import pool from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Verify PostgreSQL connection
pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL!"))
  .catch((err) => console.error("❌ Database connection error:", err));

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("🚀 API is running"));

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
