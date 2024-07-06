import React, { useState } from "react";
import CustomerList from "./CustomerList";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import { IoSearch } from "react-icons/io5";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex  gap-20 items-center h-screen w-screen bg-gray-100 mt-0  snap-mandatory snap-x ">
      <div className=" h-screen">
        <Sidebar />
      </div>

      <div className="flex flex-col gap-2 h-screen   w-full  ">
        <div className="flex flex-col gap-2  mb-1  w-11/12">
          <div className="relative flex justify-between mt-2 mb-1  ">
            <h1 className="text-base font-bold flex "> Hello, Evano👋🏼,</h1>
            <div className="relativ">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="flex-grow py-1 pl-10 pr-3 text-xs text-gray-600  bg-gray-50  border w-44 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <IoSearch className="absolute text-sm right-36 top-2  text-gray-400  " />
            </div>
          </div>
          <StatsCards className=" h-24" />
        </div>
        <div className=" max-h-80 mb-36 ">
          <CustomerList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
