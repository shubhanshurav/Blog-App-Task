import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Replace with your backend URL

export const createBlog = async (formData) => {
  const { title, description, image } = formData;
  const form = new FormData();
  form.append('title', title);
  form.append('description', description);
  form.append('image', image);

  try {
    const response = await axios.post(`${API_URL}/api/createBlog`, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/getAllBlogs`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/getAllBlogs/${id}`);
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
    const response = await axios.put(`${API_URL}/api/getAllBlogs/${id}`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/api/getAllBlogs/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
