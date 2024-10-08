import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'; 

export const createBlog = async (formData) => {

   const { title, description, imageUrl } = formData;
   const form = new FormData();
   form.append("title", title);
   form.append("description", description);
   form.append("imageUrl", imageUrl);
  try {
    const response = await axios.post(
      `${API_URL}/createBlog`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
     console.error("Error creating blog:", error.response.data);
     throw error.response.data;
  }
};


export const getBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllBlogs`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getBlogById/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateBlog = async (id, formData) => {
  const { title, description, image } = formData;
  const form = new FormData();
  form.append('title', title);
  form.append('description', description);
  if (image) form.append('image', image);

  try {
    // console.log(formData)
    const response = await axios.put(`${API_URL}/updateBlog/${id}`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteBlog/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
