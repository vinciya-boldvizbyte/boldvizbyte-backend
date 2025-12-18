import express from "express";
import * as attendanceController from "../controllers/attendanceController.js";
import * as attendanceValidator from "../validators/attendanceValidator.js";

const router = express.Router();

// --------------------
// Attendance Routes
// --------------------

// Create multiple attendance records
router.post(
  "/",
  attendanceValidator.createAttendanceRules,
  attendanceController.createAttendance
);

// Get all attendance records
router.get("/", attendanceController.getAllAttendance);

// Get attendance by ID
router.get(
  "/:id",
  attendanceValidator.idParamRule,
  attendanceController.getAttendanceById
);

// Update attendance by ID
router.put(
  "/:id",
  attendanceValidator.idParamRule,
  attendanceValidator.updateAttendanceRules,
  attendanceController.updateAttendance
);

// Delete attendance by ID
router.delete(
  "/:id",
  attendanceValidator.idParamRule,
  attendanceController.deleteAttendance
);

export default router;