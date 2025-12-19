// src/models/attendanceModel.js
import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true }, // store as YYYY-MM-DD
  status: { type: String, enum: ["Present", "Absent", "--"], default: "--" },
  login: { type: String, default: "--" },
  logout: { type: String, default: "--" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Middleware to update updatedAt on every save
attendanceSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

// --------------------------
// Functions for controller
// --------------------------

export async function createAttendance({ userId, date, status, login, logout }) {
  const record = await Attendance.create({
    userId,
    date,
    status: status || "--",
    login: login || "--",
    logout: logout || "--"
  });
  return record.toObject();
}

export function allAttendance() {
  return Attendance.find().lean();
}

export function findAttendanceById(id) {
  return Attendance.findById(id).lean();
}

export async function updateAttendance(id, payload) {
  payload.updatedAt = new Date();
  return Attendance.findByIdAndUpdate(id, payload, { new: true }).lean();
}

export function deleteAttendance(id) {
  return Attendance.findByIdAndDelete(id);
}

// default export
export default Attendance;