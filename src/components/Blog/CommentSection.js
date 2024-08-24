import React, { useState } from "react";

function CommentSection({ comments }) {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    // Handle adding a new comment
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mt-4">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Comment
      </button>

      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="mb-4">
            <p>{comment.text}</p>
            {/* Handle replies if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
