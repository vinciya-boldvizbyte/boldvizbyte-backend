import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import usersRoutes from "./routes/users.js";
import tasksRoutes from "./routes/tasks.js";
import projectsRoutes from "./routes/projects.js";
import attendanceRoutes from "./routes/attendance.js";
import summaryRoute from "./routes/summary.js"; // ✅ Added summary route

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", usersRoutes);
app.use("/tasks", tasksRoutes);
app.use("/projects", projectsRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/api", summaryRoute); // ✅ Register summary route

// Default route
app.get("/", (req, res) => {
  res.send("BoldVizByte Backend API Running");
});

// 🔥 Connect to MongoDB (RESTORED)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    // Start Server
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });
