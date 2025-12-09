import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import projectRoutes from "./routes/projectRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}));
app.use("/api/projects", projectRoutes);


// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

