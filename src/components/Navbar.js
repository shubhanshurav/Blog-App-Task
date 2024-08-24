import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; // React icon for the logout button

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear any authentication tokens or data
    localStorage.removeItem("token");
    localStorage.removeItem("profileImageUrl");
    // Navigate to login page
    navigate("/login");
  };

  // Fetch profile image URL from localStorage
  const profileImageUrl = localStorage.getItem("profileImageUrl");

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      {/* Logo or Brand Name */}
      <Link to="/" className="text-white text-xl font-bold">
        Blog App
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="/dashboard" className="text-white hover:text-gray-200">
          Dashboard
        </Link>
        <Link to="/getAllBlogs" className="text-white hover:text-gray-200">
          Blogs
        </Link>
        <Link to="/createBlog" className="text-white hover:text-gray-200">
          Add Blog
        </Link>
        {/* <Link to="/deleteBlog/" className="text-white hover:text-gray-200">
          Delete Blog
        </Link> */}
        {/* <Link to="/deleteBlog/" className="text-white hover:text-gray-200">
          Delete Blog
        </Link> */}
      </div>

      {/* Profile Image and Logout */}
      <div className="flex items-center space-x-4">
        {profileImageUrl && (
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        )}
        <button
          onClick={handleLogout}
          className="text-white hover:text-gray-200"
        >
          <FaSignOutAlt size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
