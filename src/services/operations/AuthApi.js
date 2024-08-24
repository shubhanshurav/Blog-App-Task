import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

export const signUp = async (formData) => {
  const { email, password, profileImage } = formData;
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("profileImage", profileImage);

  try {
    console.log([...form.entries()]);

    const response = await axios.post(`${API_URL}/signup`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const { profileImage } = response.data.user;
    const { userId } = response.data.user._id;
    localStorage.setItem("profileImageUrl", profileImage);
    localStorage.setItem("userId", userId);
    // console.log(profileImage)

    return response.data;
  } catch (error) {
    console.error(
      "Sign up error:",
      error.response ? error.response.data : error.message
    );
    throw error.response
      ? error.response.data
      : new Error("An error occurred during sign-up.");
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    const { profileImage} = response.data.user;
    localStorage.setItem("profileImageUrl", profileImage);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
