import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import './App.css';
import Register from './Components/Register';
import About from './Pages/About';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import DonorProfile from './Components/Donor/DonorProfile';
import Login from './Components/Login';
import Food from './Components/Donor/Food';
import InstituteDashboard from './Components/Institues/InstituteDashboard';
import ShopkeeperDashboard from './Components/Shopkeepers/ShopkeeperDashboard';
import FoodShops from './Components/Shopkeepers/FoodShops';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const role = localStorage.getItem("role");
  console.log("Role:", role);
  console.log("IsLoggedIn:", isLoggedIn);
  
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        {
          isLoggedIn &&(
        <>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        </>
        
          )
        }
        
       
       <Route element={<ProtectedRoute/>}>

      
        {  console.log("Role:", role)}
        {   role == "donor" &&(
            <>
            <Route path="/dashboard/donor" element={<DonorProfile/>}/>
            <Route path="/dashboard/institute" element={<Navigate to="/"/>}/>
            <Route path="/dashboard/shopkeeper" element={<Navigate to="/"/>}/>
            <Route path="/product/food" element={<FoodShops/>}/>
            <Route path="/institute/food" element={<Food/>}/>
            </>
           )       
}
{
           role == "institute" &&(
            <>
            <Route path="/dashboard/donor" element={<Navigate to="/"/>}/>
            <Route path="/dashboard/institute" element={<InstituteDashboard/>}/>
            <Route path="/dashboard/shopkeeper" element={<Navigate to="/"/>}/>
            <Route path="/product/food" element={<Navigate to="/"/>}/>
            <Route path="/institute/food" element={<Navigate to="/"/>}/>
            </>
           )       
}
{
           role == "shopkeeper" &&(
            <>
            <Route path="/dashboard/donor" element={<Navigate to="/"/>}/>
            <Route path="/dashboard/institute" element={<Navigate to="/"/>}/>
            <Route path="/dashboard/shopkeeper" element={<ShopkeeperDashboard/>}/>
            <Route path="/product/food" element={<Navigate to="/"/>}/>
            <Route path="/institute/food" element={<Navigate to="/"/>}/>
            </>
           )       
}
       
       </Route>
       
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
