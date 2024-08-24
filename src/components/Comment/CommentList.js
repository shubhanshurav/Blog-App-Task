import React from "react";
import useFetchComment from "../hooks/useFetchComment";

function CommentsList({ blogId }) {
  const comments = useFetchComment(blogId);

  return (
    <div className="comments-list">
      <h3 className="text-lg font-bold mb-4">Comments</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment._id}
            className="mb-4 p-4 bg-gray-100 rounded shadow"
          >
            <p>{comment.blogComment}</p>
            {/* Add nested comments or reply functionality here if needed */}
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default CommentsList;
