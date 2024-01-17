import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../pages/Home/Home";

const Routesfile = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routesfile;
