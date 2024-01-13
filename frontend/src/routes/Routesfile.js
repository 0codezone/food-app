import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const Routesfile = () => {
  return (
    <>
      auth ? (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      ):(
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      )
    </>
  );
};

export default Routesfile;
