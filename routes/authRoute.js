const { Router } = require("express");
const { signup_post, signup_get } = require("../controllers/authController");

const router = Router();

router.get("/signup", signup_get);
router.post("/signup", signup_post);

module.exports = router;
