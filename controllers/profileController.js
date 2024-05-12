const User = require("../models/User");

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Edit user profile
exports.editProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const { password, profileVisibility, phone, bio, photo } = req.body;

    // Find the user by username
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user profile fields
    if (password) user.password = password; // Make sure to hash the new password
    if (profileVisibility !== undefined) user.profileVisibility = profileVisibility;
    if (phone) user.phone = phone;
    if (bio) user.bio = bio;
    if (photo) user.photo = photo;

    // Save the updated user profile
    await user.save();

    res.json({ message: 'Profile updated successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};