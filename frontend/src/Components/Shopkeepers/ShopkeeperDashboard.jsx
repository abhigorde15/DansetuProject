import { useState, useEffect } from "react";

import axios from "axios";
import Sidebar from "../Donor/Sidebar";
import FeedbackForm from "../Institues/FeedbackForm";
import ListShop from "./ListShop";
import ListProduct from "./ListProduct";
import Products from "./Products";
const ShopkeeperDashboard = () => {
 
 function onProductAdded() {
    console.log("Product Added");
  }

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="ml-1/4 p-6 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">ShopKeeper Dashboard</h1>
         <div className="mb-6">
          <ListShop />
         </div>
         <div className="mb-6">
            <ListProduct onProductAdded={onProductAdded} />
          </div>
          <div>
            <Products  />
          </div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default ShopkeeperDashboard;
