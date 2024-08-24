import React, { useState } from "react";
import { toast } from "react-toastify";
import { createComment } from "../../services/operations/CommentApi";

function CommentForm({ blogId, parentId = null, onCommentAdded }) {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        blogId,
        parentId,
        blogComment: comment,
      };

      const response = await createComment(formData);
      toast.success("Comment added successfully!");

      setComment(""); // Clear the comment input
      onCommentAdded(response); // Callback to update the comment list
    } catch (error) {
      toast.error(error || "Failed to add comment");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <textarea
        name="comment"
        placeholder="Add your comment"
        value={comment}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white w-full py-2 rounded cursor-pointer"
      >
        Post Comment
      </button>
    </form>
  );
}

export default CommentForm;
