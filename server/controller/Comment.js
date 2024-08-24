const Comment = require("../models/Comment");

exports.createComment = async (req, res) => {
  try {
    const { blogId, blogComment, parentId } = req.body;
    const comment = new Comment({
      blogId,
      blogComment,
      parentId: parentId || null,
    });

    await comment.save();
    res.status(201).json({
      message: "Comment added successfully",
      comment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding comment",
      error,
    });
  }
};

exports.getComments = async (req, res) => {
  try {
    const { blogId } = req.params;
    const comments = await Comment.find({ blogId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
};
