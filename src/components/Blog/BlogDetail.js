import React from "react";

function BlogDetail({ blog }) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <img
        src={blog.imageUrl}
        alt="Blog"
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p>{blog.description}</p>
    </div>
  );
}

export default BlogDetail;
