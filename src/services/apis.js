const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/v1";

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/signup",
  LOGIN_API: BASE_URL + "/login",
};

// Comment ENDPOINTS
export const commentEndPoints = {
  CREATE_COMMENT: BASE_URL + "/createComment",
  GET_ALL_COMMENT: BASE_URL + "/getComments",
};

// Post ENDPOINTS
export const blogEndPoints = {
  GET_ALL_BLOGS: BASE_URL + "/getAllBlogs",
  CREATE_BLOG: BASE_URL + "/createBlog",
  UPDATE_BLOG: BASE_URL + "/updateBlog",
  DELETE_BLOG: BASE_URL + "/deleteBlog",
};

// Post ENDPOINTS
export const userEndPoints = {
  GET_PROFILE: BASE_URL + "/users/getProfile",
  UPDATE_PROFILE: BASE_URL + "/users/updateProfile",
};
