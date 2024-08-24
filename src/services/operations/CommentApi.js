import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

// Create a new comment
export const createComment = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/createComments`, formData);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating comment:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

// Get comments by blogId
export const getComments = async (blogId) => {
  try {
    const response = await axios.get(`${API_URL}/getComments/${blogId}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching comments:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};
