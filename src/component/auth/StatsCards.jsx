import React from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { GrUserExpert } from "react-icons/gr";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const StatsCards = () => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg shadow h-24   py-4 ">
      <div className="flex items-center w-1/3 border-r   pl-16  ">
        <div className="bg-green-100 p-4  rounded-full  ">
          <HiOutlineUsers className="h-6 w-6 text-green-600" />
        </div>
        <div className="ml-4">
          <p className="text-gray-400 text-xs">Total Customers</p>
          <p className="text-lg  font-bold">5,423</p>
          <p className="text-green-500 text-xs">▲ 16% this month</p>
        </div>
      </div>
      <div className="flex items-center w-1/3   border-r   pl-16  ">
        <div className="bg-green-100 p-4 rounded-full">
          <GrUserExpert className="h-6 w-6 text-green-600" />
        </div>
        <div className="ml-4">
          <p className="text-gray-400 text-xs">Members</p>
          <p className="text-lg font-bold">1,893</p>
          <p className="text-red-500 text-xs">▼ 1% this month</p>
        </div>
      </div>
      <div className="flex items-center w-1/3 border-r   pl-16 ">
        <div className="bg-green-100 p-4 rounded-full">
          <HiOutlineComputerDesktop className="h-6 w-6 text-green-600" />
        </div>
        <div className="ml-4">
          <p className="text-gray-400 text-xs">Active Now</p>
          <p className="text-lg font-bold">189</p>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
