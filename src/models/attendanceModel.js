// src/models/attendanceModel.js
import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  status: { type: String, default: "present" }, // present / absent / leave
  notes: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

// --------------------------
// Functions (MongoDB versions)
// --------------------------

export async function createAttendance({ userId, date, status, notes }) {
  const record = await Attendance.create({
    userId,
    date,
    status: status || "present",
    notes: notes || ""
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
