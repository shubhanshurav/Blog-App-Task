import React from "react";
import ProfileImage from "./ProfileImage";

function Dashboard() {
  const profileImageUrl = localStorage.getItem("profileImageUrl");

  // console.log(profileImageUrl)

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-end">
        <ProfileImage imageUrl={profileImageUrl} /> 
      </div>
      <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
      {/* Add more dashboard content here */}
    </div>
  );
}

export default Dashboard;
