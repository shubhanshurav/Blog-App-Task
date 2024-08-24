import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createBlog, updateBlog } from "../../services/operations/BlogApi";

function BlogForm({ initialData = {}, isEditing = false }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: null,
  });

  const [imagePreview, setImagePreview] = useState(
    initialData.imageUrl || null
  );

  useEffect(() => {
    if (formData.imageUrl) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreview(fileReader.result);
      };
      fileReader.readAsDataURL(formData.imageUrl);
    } else if (initialData.imageUrl) {
      setImagePreview(initialData.imageUrl);
    } else {
      setImagePreview(null);
    }
  }, [formData.imageUrl, initialData.imageUrl]);

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

      let response;
      if (isEditing) {
        response = await updateBlog(initialData._id, formData);
        toast.success("Blog updated successfully!");
      } else {
        response = await createBlog(formData);
        toast.success("Blog posted successfully!");
      }

      console.log("Blog response data:", response);
    } catch (error) {
      toast.error(error.message || "Failed to post blog");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {isEditing ? "Edit" : "Add"} Blog
      </h2>
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
        name="imageUrl"
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
        className="bg-blue-500 text-white w-full py-2 rounded cursor-pointer"
      >
        {isEditing ? "Update Blog" : "Post Blog"}
      </button>
    </form>
  );
}

export default BlogForm;
