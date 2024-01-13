import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const registerHandler = () => {
    alert("register succes");
    navigate("/login");
  };
  return (
    <div className="w-full flex justify-center items-center h-lvh">
      <div className="flex flex-col p-4 bg-slate-200">
        <input type="text" placeholder="enter email " />
        <input type="text" placeholder="enter passwrod " />
        <button
          className="bg-green-300 px-4 py-2 rounded"
          onClick={registerHandler}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
