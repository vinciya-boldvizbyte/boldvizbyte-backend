export function createAttendance(req, res) {
  res.json({ message: "Attendance recorded", data: req.body });
}

export function getAllAttendance(req, res) {
  res.json({ message: "All attendance", data: [] });
}

export function getAttendanceById(req, res) {
  res.json({ message: `Attendance ${req.params.id}`, data: null });
}

export function updateAttendance(req, res) {
  res.json({ message: `Attendance ${req.params.id} updated`, data: req.body });
}

export function deleteAttendance(req, res) {
  res.json({ message: `Attendance ${req.params.id} deleted` });
}
