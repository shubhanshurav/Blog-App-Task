const express = require("express");
const router = express.Router();

const { createComment, getComments } = require("../controller/Comment");

router.post("/createComments", createComment);
router.get("/getComments/:blogId", getComments);

module.exports = router;
