const express = require("express");

const { setMessage } = require("../controller/receiveController");
const router = express.Router();

router.route("/:id").post(setMessage);
module.exports = router;
