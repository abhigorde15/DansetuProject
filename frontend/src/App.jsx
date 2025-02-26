import {  Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./component/Login";
import Register from "./component/Register";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
     
      <Routes>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
