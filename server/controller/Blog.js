const Blog = require("../models/Blog");
const { uploadImageToCloudinary } = require("../config/imageUploader");
require("dotenv").config();

exports.createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    // const { title, description, userId} = req.body;

    const imageUrl = req.files.imageUrl;
    console.log("Image URL: ", imageUrl);

    const postImage = await uploadImageToCloudinary(
      imageUrl,
      process.env.FOLDER_NAME
    );

    const blog = new Blog({
      // userId,
      title,
      imageUrl: postImage.secure_url,
      description,
    });

    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching blogs",
      error,
    });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching blog",
      error,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    let updatedData = { title, description };

    console.log(req.file);

    if (req.file) {
      const imageUrl = req.files.imageUrl;
      const postImage = await uploadImageToCloudinary(
        imageUrl,
        process.env.FOLDER_NAME
      );
      updatedData.imageUrl = postImage.secure_url;
    }

    const blog = await Blog.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};
