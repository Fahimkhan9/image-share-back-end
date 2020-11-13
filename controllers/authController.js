const Profile = require("../models/Profiles");

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const profiles = await Profile.create({ email, password });
    res.send(profiles);
  } catch (error) {
    res.send(error);
  }
};
