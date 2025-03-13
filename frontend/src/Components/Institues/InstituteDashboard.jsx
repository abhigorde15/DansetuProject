import { useState, useEffect } from "react";
import Sidebar from "../Donor/Sidebar";
import RequestForm from "./RequestForm";
import RequestTable from "./RequestTable";
import FeedbackForm from "./FeedbackForm";
import axios from "axios";

const InstituteDashboard = () => {
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
      <div className="ml-80 p-6 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Institute Dashboard</h1>
        <div className="mb-6">
          <RequestForm  addRequest={(newRequest) => setRequests((prev) => [...prev, newRequest])} />
        </div>
        <div className="mb-6">
          <RequestTable requests={requests} cancelRequest={cancelRequest} />
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default InstituteDashboard;
