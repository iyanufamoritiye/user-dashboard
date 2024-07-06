import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Successimg from "../images/Successimg.png";

const SignupSuccess = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/ ");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 m-0">
      <div className="relative bg-white   rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-12 px-0">
          <img
            src={Successimg}
            alt="Success"
            className=" bg-red-100 w-full rounded-t-md "
          />
        </div>
        <div className="text-center px-6">
          <h2 className="text-4xl text-start font-bold mb-14">
            You are successfully registered!
          </h2>
          <button
            onClick={handleLoginRedirect}
            className="w-full h-10 bg-purple-600 text-white p-2  rounded-md mb-10 "
          >
            Go to Login
          </button>
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-gray-500"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;
