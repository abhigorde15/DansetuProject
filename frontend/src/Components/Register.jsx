import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ 
    username: "", 
    email: "", 
    password: "", 
    profileImage: null,
    role: "donor" // Default role
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    if (e.target.name === "profileImage") {
      setFormData({ ...formData, profileImage: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("role", formData.role);
      if (formData.profileImage) {
        formDataToSend.append("profileImage", formData.profileImage);
      }

      const response = await registerUser(formDataToSend);
      setMessage(response.data);
      setTimeout(() => navigate("/login"), 1500); 
    } catch (error) {
      setMessage("Registration failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-96 text-white">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Register</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border border-gray-600 rounded-md mb-2 bg-gray-700 text-white placeholder-gray-400"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-600 rounded-md mb-2 bg-gray-700 text-white placeholder-gray-400"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-600 rounded-md mb-2 bg-gray-700 text-white placeholder-gray-400"
            onChange={handleChange}
          />
          
          {/* Role Selection */}
          <select
            name="role"
            className="w-full p-2 border border-gray-600 rounded-md mb-2 bg-gray-700 text-white"
            onChange={handleChange}
            value={formData.role}
          >
            <option value="donor">Donor</option>
            <option value="institute">Institute</option>
            <option value="shopkeeper">Shopkeeper</option>
          </select>

          <input
            type="file"
            name="profileImage"
            accept="image/*"
            className="w-full p-2 border border-gray-600 rounded-md mb-2 bg-gray-700 text-white"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-2 text-red-400">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
