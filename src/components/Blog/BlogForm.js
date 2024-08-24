import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createBlog } from "../../services/operations/BlogApi";

function BlogForm({initialData = {} }) {

    const [formData, setFormData] = useState({
      title: "",
      description: "",
      imageUrl: null,
    });

  const [imagePreview, setImagePreview] = useState(initialData.imageUrl || null);
  // const [loading, setLoading] = useState(false);

  console.log(formData);

  useEffect(() => {
    if (formData.imageUrl) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreview(fileReader.result);
      };
      fileReader.readAsDataURL(formData.imageUrl);
    } else {
      setImagePreview(null); 
    }
  }, [formData.imageUrl]);


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

        const response = await createBlog(formData);

        console.log("blog ka data:", response);

        toast.success("Blog Posted successfully!");
      } catch (error) {
        toast.error(error.message || "Failed to blog posted");
      }
    };

  // // const handleSubmit = async (e) => {
  // //   e.preventDefault();
  // //   if (
  // //     !formData.title ||
  // //     !formData.description ||
  // //     !formData.image
  // //     // || !formData.userId
  // //   ) {
  // //     toast.error("All fields are required");
  // //     return;
  // //   }

  // //   setLoading(true);
  // //   try {
  // //     await onSubmit(data);
  // //     console.log(data);
  // //     toast.success("Blog submitted successfully!");
  // //   } catch (error) {
  // //     toast.error("Failed to submit the blog");
  // //   } finally {
  // //     setLoading(false);
  // //   }
  // // };

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
        Post Blog
      </button>
    </form>
  );
}

export default BlogForm;
