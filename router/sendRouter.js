const express = require("express");

const {
  setMessage,
  sendMessage,
  home,
} = require("../controller/sendController");
const router = express.Router();

router.route("/").post(sendMessage).get(home);
router.route("/:id").post(setMessage);
module.exports = router;
