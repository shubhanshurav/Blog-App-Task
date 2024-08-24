import React, { useState } from "react";
import { signUp } from "../../services/operations/AuthApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    profileImage: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting form data:", formData);

      const response = await signUp(formData);

      console.log("Signup data:", response);

      toast.success("User registered successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Failed to register");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="file"
          name="profileImage"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Sign Up
        </button>
        <div>
          <p>
            don't have account?{" "}
            <Link to={"/login"} className="text-blue-600 font bold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
