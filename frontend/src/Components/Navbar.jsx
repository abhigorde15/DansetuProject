import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
let Navbar  = ()=>{
 
  const token = localStorage.getItem("token");
   const navigate = useNavigate();
    // Profiles to select from
    
    const handleLogout = async () => {
      try {
          await fetch("http://localhost:8080/api/auth/logout", {
              method: "POST",
              credentials: "include", // Needed if using cookies
          });
  
          // Remove token from local storage if stored there
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.setItem("loggedIn",false);
          // Redirect to login page
          window.location.href = "/login";
      } catch (error) {
          console.error("Logout failed", error);
      }
  };
  
    // Open Dialog
    const handleContactClick = (e) => {
      e.preventDefault();
  
      if (location.pathname !== "/") {
        navigate("/"); // Redirect to homepage first
        setTimeout(() => {
          document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
        }, 500); // Delay scrolling to ensure page loads first
      } else {
        document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
      }
    };
  return(
    <>
   

<nav className="bg-white   fixed w-full z-20 top-0 start-0 border-b border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/NewLogo.png" className="h-12" alt="" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    {token == null ?(
       <div>
       <button type="button"
       onClick={() => navigate("/login")}
       className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign in</button>
       <Button
   onClick ={() => {
     navigate("/register");
    
   }}
   type="button"
   sx={{
     backgroundColor: "#1D4ED8", // bg-blue-700
     "&:hover": { backgroundColor: "#1E40AF" }, // hover:bg-blue-800
     "&:focus": { outline: "none", boxShadow: "0 0 0 4px rgba(59,130,246,0.5)" }, // focus:ring-4 focus:ring-blue-300
     borderRadius: "0.5rem", // rounded-lg
     fontSize: "0.875rem", // text-sm
     fontWeight: 500, // font-medium
     padding: "0.5rem 1rem", // px-4 py-2
     textAlign: "center", // text-center
     color: "white", // text-white
     transition: "background-color 0.2s ease-in-out",
     mx: 2, 
   
   }}
   className="  dark:focus:ring-blue-800 mx-2"
 >
   Sign Up
 </Button>
 
 </div>
  ) : (
    <button type="button"
    onClick={handleLogout}
    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign Out</button>
  )}
   




      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  text-black dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 px-3 text-black  rounded-sm md:bg-transparent md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="/about" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        href="#Contact"  onClick={handleContactClick}
        >Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>




    </>
  )
}
export default Navbar;