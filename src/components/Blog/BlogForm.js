import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function BlogForm({ onSubmit, initialData = {} }) {
  
  // const storedUserId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    imageUrl: null,
    // userId: storedUserId || "",
  });

  const [imagePreview, setImagePreview] = useState(initialData.image || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    if (formData.image) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreview(fileReader.result);
      };
      fileReader.readAsDataURL(formData.image);
    } else {
      setImagePreview(null); // Clear preview if no image
    }
  }, [formData.image]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.description ||
      !formData.image 
      // || !formData.userId
    ) {
      toast.error("All fields are required");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("imageUrl", formData.image);
    // data.append("userId", formData.userId);

    setLoading(true);
    try {
      await onSubmit(data);
      console.log(data)
      toast.success("Blog submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit the blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add/Edit Blog</h2>
      <input
        type="text"
        name="title"
        placeholder="Blog Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        name="description"
        placeholder="Blog Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      {imagePreview && (
        <div className="mb-4">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-auto rounded"
          />
        </div>
      )}
      <button
        type="submit"
        className={`bg-blue-500 text-white w-full py-2 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default BlogForm;
