const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const profileController = require("../controllers/profileController");

// Get user profile (requires authentication)
router.get("/profile", authMiddleware, profileController.getProfile);

// Route to edit user profile
router.put('/profile/:username', profileController.editProfile);

module.exports = router;
