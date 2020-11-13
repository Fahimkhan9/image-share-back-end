const { Router } = require("express");
const { signup_post } = require("../controllers/authController");

const router = Router();

router.post("/signup", signup_post);

module.exports = router;
