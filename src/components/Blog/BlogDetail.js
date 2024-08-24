import React from "react";
import { useParams } from "react-router-dom";
import useFetchBlog from "../hooks/useFetchBlog";
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentList";

function BlogDetail() {
  const {id} = useParams();
  const blog = useFetchBlog(id);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <img
        src={blog.imageUrl}
        alt="Blog"
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p>{blog.description}</p>

      {/* Comment Section */}
      <CommentForm
        blogId={blog._id}
        onCommentAdded={() => {
          /* Reload comments */
        }}
      />
      <CommentsList blogId={blog._id} />
    </div>
  );
}

export default BlogDetail;
