const express = require("express");
const { handleUserSignup } = require("../controllers/user");
const router = express.Router();

router.post("/", handleUsersSignup);

module.exports = router;
