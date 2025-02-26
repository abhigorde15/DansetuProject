import { useState } from "react";
import { loginUser } from "../services/api";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      localStorage.setItem("token", response.data.token);
      setTimeout(() => navigate("/register"), 1500); 
      setMessage("You have logged in successfully!"); 

    } catch (error) {
      setMessage("Login failed!");
    }
  };

  return (
  <div className="flex flex-col items-center justify-center">
  <div className="bg-gray-800 p-6 rounded-lg shadow-md w-96 text-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded-md mb-2"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md mb-2"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-2 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
