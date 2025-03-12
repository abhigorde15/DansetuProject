import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Axios import करा
import CustomizedDialogs from "./CustomizedDialogs";

const ListShop = () => {
  const [open, setOpen] = useState(false);
  const [shopData, setShopData] = useState(null); 
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/shop/user", {
          headers: {
            Authorization: token,
          },
        });
        setShopData(response.data);
        console.log(response.data);
        console.log(response.data.image);
      } catch (error) {
        console.error("Error fetching shop data:", error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-blue-200 text-center">
      {shopData ? (
        
        <div>
          <h1 className="text-xl font-bold mb-4">Your Listed Shop</h1>
          <h2 className="text-xl font-semibold mb-4">{shopData.shopName}</h2>
          <p>Owner: {shopData.ownerName}</p>
          <p>📞 {shopData.phone}</p>
          <p>📍 {shopData.address}</p>
          <p>⏰ {shopData.openingHours}</p>
          <img
            src={shopData.image}
            alt="Shop"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div>
      ) : (
        
        <>
          <h2 className="text-xl font-semibold mb-4">Why are You Waiting For?</h2>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              backgroundColor: "#3B82F6",
              color: "white",
              paddingX: "1rem",
              paddingY: "0.5rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.3s ease-in-out",
              marginTop: "1rem",
              "&:hover": { backgroundColor: "#2563EB" },
            }}
          >
            Add Shop
          </Button>
          <CustomizedDialogs open={open} handleClose={() => setOpen(false)} />
        </>
      )}
    </div>
  );
};

export default ListShop;
