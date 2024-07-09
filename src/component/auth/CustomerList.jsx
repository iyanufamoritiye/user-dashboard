import { ClassNames } from "@emotion/react";
import { Style } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { TbBackground } from "react-icons/tb";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [sort, setSort] = useState("Newest");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Mock customer data
    setCustomers([
      {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
      },
      {
        name: "Floyd Miles",
        company: "Yahoo",
        phone: "(205) 555-0100",
        email: "floyd@yahoo.com",
        country: "Kiribati",
        status: "Inactive",
      },
      {
        name: "Ronald Richards",
        company: "Adobe",
        phone: "(302) 555-0107",
        email: "ronald@adobe.com",
        country: "Israel",
        status: "Inactive",
      },
      {
        name: "Marvin McKinney",
        company: "Tesla",
        phone: "(252) 555-0126",
        email: "marvin@tesla.com",
        country: "Iran",
        status: "Active",
      },
      {
        name: "Jerome Bell",
        company: "Google",
        phone: "(629) 555-0129",
        email: "jerome@google.com",
        country: "Réunion",
        status: "Active",
      },
      {
        name: "Kathryn Murphy",
        company: "Microsoft",
        phone: "(406) 555-0120",
        email: "kathryn@microsoft.com",
        country: "Curaçao",
        status: "Active",
      },
      {
        name: "Jacob Jones",
        company: "Yahoo",
        phone: "(208) 555-0112",
        email: "jacob@yahoo.com",
        country: "Brazil",
        status: "Active",
      },
      {
        name: "Kristin Watson",
        company: "Facebook",
        phone: "(704) 555-0127",
        email: "kristin@facebook.com",
        country: "Åland Islands",
        status: "Inactive",
      },
      // Add more customer data here
    ]);
  }, []);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCustomers = customers
    .filter((customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "Newest"
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name)
    );

  return (
    <div className=" relative bg-white        py-2 px-6 rounded-lg shadow-md w-11/12     md:h-[550px]   lg:h-[550px ] xs:max-width-36  xs:h-[550px ]  ">
      <div className="flex justify-between xs:flex-col">
        <div>
          <h2 className="  font-bold mb-1 text-base md:text-sm">
            All Customers
          </h2>
          <p className=" text-xs text-start text-green-300 mb-2 md:">
            Active member
          </p>
        </div>
        <div className="flex items-center justify-between gap-4  mb-2 mb:gap-2  ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
              className="flex-grow py-2 pl-8 pr-3 text-xs text-gray-600  bg-gray-50  border w-40 border-0 rounded-md 
              shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <IoSearch className="absolute text-sm left-3  top-2.5 text-gray-400  " />
          </div>

          <div className="relative mr-4 w-32  ">
            <label className="absolute left-3  top-2 text-gray-400 text-xs ">
              Sort by :
            </label>
            <select
              className="    block w-full py-2 px-3 border-0 text-end text-xs bg-gray-50 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="  h-96     xs:overflow-auto ">
        <table className="min-w-full bg-white  xs:snap-mandatory">
          <thead className="text-xs text-gray-300 text-start  font-medium p-0  ">
            <tr>
              <th className="text-start  py-2 pl-0 pr-4  border-b">
                Customer Name
              </th>
              <th className="text-start  py-2 px-4 border-b">Company</th>
              <th className=" text-start      py-2 px-4 border-b">
                Phone Number
              </th>
              <th className="text-start     py-2 px-4 border-b">Email</th>
              <th className="text-start      py-2 px-4 border-b">Country</th>
              <th className="text-center   py-2  pl-4 pr-0  border-b">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="text-xs font-medium text-start p-o text-[8px]">
            {filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <td className="py-2 pl-0 pr-4  border-b">{customer.name}</td>
                <td className="py-2 px-4 border-b">{customer.company}</td>
                <td className="py-2 px-4  border-b">{customer.phone}</td>
                <td className="py-2 px-4   border-b">{customer.email}</td>
                <td className="py-2 px-4   border-b">{customer.country}</td>
                <td className="py-2  pl-2 pr-0 border-b text-end ">
                  <span
                    className={`inline-flex items-center border-2 px-3 py-0.5  rounded-md text-sm text-center   font-medium ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-800 border-green-400  px-4  text-center "
                        : "bg-red-100 text-red-800 border-red-400  w-l2  text-center -pr-2"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-6  lg:mt-16 md:mt-16   ">
        <div className="text-sm   text-gray-400">
          Showing data 1 to 8 of 256K entries
        </div>
        <div className="flex gap-x-2 ">
          <button className="bg-gray-50  text-[#404B52] text-[8px] h-6 w-6 border rounded-md focus:bg-[#5932EA] focus:text-white">
            {"<"}
          </button>
          {[1, 2, 3, 4, "...", 40].map((num, index) => (
            <button
              key={index}
              onClick={() => handleChangePage(num - 1)}
              defaultValue={1}
              className="h-6 w-6 text-[8px] font-bold   border rounded-md focus:bg-[#5932EA] focus:text-white"
            >
              {num}
            </button>
          ))}
          <button className="h-6 w-6 text-[8px] font-bold   border rounded-md focus:bg-[#5932EA] focus:text-white">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
