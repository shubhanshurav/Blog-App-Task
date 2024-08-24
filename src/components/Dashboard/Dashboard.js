import React from "react";
import ProfileImage from "./ProfileImage";

function Dashboard() {
  const profileImageUrl = localStorage.getItem("profileImageUrl");

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      <div className="flex justify-end mb-8">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-white rounded-full shadow-lg">
            <ProfileImage
              imageUrl={profileImageUrl}
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div>
            <p className="text-white text-lg font-semibold">Welcome back!</p>
            <p className="text-gray-200 text-sm">Ready to explore?</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600">
          This is your dashboard. From here, you can manage your blog posts,
          check your activity, and more.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
