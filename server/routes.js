const express = require("express");
const router = express.Router();

const userRoutes = require("./route/User");
const blogRoutes = require("./route/Blog");
const commentRoutes = require("./route/Comment");

router.use("/", userRoutes);
router.use("/", blogRoutes);
router.use("/", commentRoutes);

module.exports = router;
