import { body, param, validationResult } from "express-validator";

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ error: "Validation failed", details: errors.mapped() });
  next();
};

export const createAttendanceRules = [
  body("userId").exists().isUUID(),
  body("date").exists().isISO8601(),
  body("status").exists().isIn(["present","absent","leave"]),
  body("notes").optional().isString(),
  handleValidation
];

export const updateAttendanceRules = createAttendanceRules;

export const idParamRule = [
  param("id").exists().isUUID().withMessage("Invalid attendance ID"),
  handleValidation
];
