import React from "react";
import BlogItem from "./BlogItem";

function BlogList({ blogs, onEdit, onDelete }) {
  console.log(blogs)
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Blog List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border-b py-2">Title</th>
            <th className="border-b py-2">Image</th>
            <th className="border-b py-2">Description</th>
            <th className="border-b py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => (
            <BlogItem
              key={blog._id}
              blog={blog}
              onEdit={() => onEdit(blog)}
              onDelete={() => onDelete(blog._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogList;
