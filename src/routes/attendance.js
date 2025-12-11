import express from "express";
import * as attendanceController from "../controllers/attendanceController.js";
import * as attendanceValidator from "../validators/attendanceValidator.js";

const router = express.Router();

// Create attendance
router.post("/", attendanceValidator.createAttendanceRules, attendanceController.createAttendance);

// Get all attendance
router.get("/", attendanceController.getAllAttendance);

// Get attendance by ID
router.get("/:id", attendanceValidator.idParamRule, attendanceController.getAttendanceById);

// Update attendance
router.put("/:id", attendanceValidator.idParamRule, attendanceValidator.updateAttendanceRules, attendanceController.updateAttendance);

// Delete attendance
router.delete("/:id", attendanceValidator.idParamRule, attendanceController.deleteAttendance);

export default router;
