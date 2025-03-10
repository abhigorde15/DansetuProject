import { useState, useEffect } from "react";

import axios from "axios";
import Sidebar from "../Donor/Sidebar";
import FeedbackForm from "../Institues/FeedbackForm";
import ListShop from "./ListShop";

const ShopkeeperDashboard = () => {
  const [requests, setRequests] = useState([]);

  // Fetch requests from backend when component mounts
  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:8080/api/donation/req", {
          headers: { Authorization: `${token}` },
        });

        console.log("Requests data:", response.data);
        setRequests(response.data); // Set state with fetched data
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  // Function to cancel a request
  const cancelRequest = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8080/api/donation/req/${id}`, {
        headers: { Authorization: `${token}` },
      });

      setRequests((prevRequests) => prevRequests.filter((req) => req.reqId !== id));
    } catch (error) {
      console.error("Error canceling request:", error);
    }
  };

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="ml-1/4 p-6 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">ShopKeeper Dashboard</h1>
         <div className="mb-6">
          <ListShop />
         </div>
        
        <FeedbackForm />
      </div>
    </div>
  );
};

export default ShopkeeperDashboard;
