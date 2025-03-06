const express = require("express");
const { getUserById } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile/:id", protect, getUserById);

module.exports = router;
