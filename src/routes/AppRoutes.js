import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "../components/Auth/Signup";
import Login from "../components/Auth/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import BlogForm from "../components/Blog/BlogForm";
import BlogList from "../components/Blog/BlogList";
import BlogDetail from "../components/Blog/BlogDetail";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";


function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = !!localStorage.getItem("token"); 
  return isAuthenticated ? element : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/createBlog"
          element={<ProtectedRoute element={<BlogForm />} />}
        />
        {/* <Route
          path="/edit-blog/:id"
          element={<ProtectedRoute element={<BlogForm />} />}
        /> */}
        <Route
          path="/getAllBlogs"
          element={<ProtectedRoute element={<BlogList />} />}
        />
        <Route
          path="/getAllBlogs/:id"
          element={<ProtectedRoute element={<BlogDetail />} />}
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
