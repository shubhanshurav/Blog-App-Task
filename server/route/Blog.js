const express = require("express");
const router = express.Router();

const { createBlog, getBlogs, deleteBlog, updateBlog } = require("../controller/Blog");

router.post("/createBlog", createBlog);
router.put("/updateBlog/:id", updateBlog);
router.get("/getAllBlogs", getBlogs);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;
