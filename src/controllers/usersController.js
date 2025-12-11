export function createUser(req, res) {
  res.json({ message: "User created", data: req.body });
}

export function getAllUsers(req, res) {
  res.json({ message: "All users", data: [] });
}

export function getUserById(req, res) {
  res.json({ message: `User ${req.params.id}`, data: null });
}

export function updateUser(req, res) {
  res.json({ message: `User ${req.params.id} updated`, data: req.body });
}

export function deleteUser(req, res) {
  res.json({ message: `User ${req.params.id} deleted` });
}
