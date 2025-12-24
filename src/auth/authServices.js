import axios from "axios";
import USER_ENDPOINTS from "./authRoutes";
// import { get } from "mongoose";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "x-request-source": "web",
    },
  };
};

//add resident
export const createResidentialApplication = async (formData) => {
  const response = await axios.post(
    // APPLICATION_ENDPOINTS.CREATE_RESIDENTIAL,
    USER_ENDPOINTS.CREATE_RESIDENTIAL,
    formData,
    {
        ...getAuthHeader(),
      headers: {
             ...getAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    },
    
  );

  return response.data;
};




export const LoginService= async(userData)=>{
  const response = await axios.post(USER_ENDPOINTS.ADMIN_USER,userData)
  return await response.data
}