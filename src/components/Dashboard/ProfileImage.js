import React from "react";

function ProfileImage({ imageUrl }) {
  return (
    <div className="w-16 h-16">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          className="rounded-full w-full h-full object-cover"
        />
      ) : (
        <div className="bg-gray-300 rounded-full w-full h-full flex items-center justify-center">
          <span>No Image</span>
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
