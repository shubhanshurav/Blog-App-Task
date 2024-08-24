import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import {
  getBlogs,
  deleteBlog,
} from "../../services/operations/BlogApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const fetchedBlogs = await getBlogs();
        setBlogs(fetchedBlogs);
        // console.log(fetchedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    }
    fetchBlogs();
  }, []);

  const handleEdit = (id) => {
    // Navigate to edit page with the blog ID
    navigate(`/updateBlog/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog._id !== id)); // Update state to remove deleted blog
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.error("Failed to delete blog", error);
      toast.error("Failed to delete blog");
    }
  };

  const viewFullBLog = (id) => {
      navigate(`/viewFullBlog/${id}`);
  }

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
              onEdit={() => handleEdit(blog._id)}
              onDelete={() => handleDelete(blog._id)}
              viewFullBLog={() => viewFullBLog(blog._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogList;
