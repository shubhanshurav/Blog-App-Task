import React from "react";

function BlogItem({ blog, onEdit, onDelete, viewFullBLog}) {
  return (
    <tr>
      <td className="border-b py-2">{blog.title}</td>
      <td className="border-b py-2">
        <img
          src={blog.imageUrl}
          alt="Blog"
          className="w-16 h-16 object-cover rounded"
        />
      </td>
      <td className="border-b py-2">{blog.description.slice(0, 50)}...</td>
      <td className="border-b py-2">
        <button onClick={onEdit} className="text-blue-500">
          Edit
        </button>
        <button onClick={viewFullBLog} className="text-red-500 ml-4">
          View
        </button>
        <button onClick={onDelete} className="text-red-500 ml-4">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default BlogItem;
