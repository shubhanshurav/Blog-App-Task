const express = require("express");
const router = express.Router();

const {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
  getBlogById,
} = require("../controller/Blog");

router.post("/createBlog", createBlog);
router.put("/updateBlog/:id", updateBlog);
router.get("/getAllBlogs", getBlogs);
router.get("/getBlogById/:id", getBlogById);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;
