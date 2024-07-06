import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useSignup } from "../auth/SignupContext";
import { IoSearch } from "react-icons/io5";
import { PiMapPinBold } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";

import { PiCurrencyDollar } from "react-icons/pi";

const SignupThree = () => {
  const navigate = useNavigate();
  const { signupData, setSignupData } = useSignup();

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Use a reverse geocoding service to convert the coordinates to an address
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.results.length > 0) {
                const address = data.results[0].formatted_address;
                const components = data.results[0].address_components;

                const street = components.find((component) =>
                  component.types.includes("route")
                )?.long_name;
                const city = components.find((component) =>
                  component.types.includes("locality")
                )?.long_name;
                const state = components.find((component) =>
                  component.types.includes("administrative_area_level_1")
                )?.short_name;
                const zip = components.find((component) =>
                  component.types.includes("postal_code")
                )?.long_name;

                setSignupData({
                  ...signupData,
                  address: {
                    street,
                    apartment: "",
                    city,
                    state,
                    zip,
                  },
                });
              } else {
                alert("Unable to determine address from location.");
              }
            })
            .catch((error) => {
              console.error("Error fetching address data:", error);
              alert("An error occurred while fetching the address.");
            });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to get your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleAddManually = () => {
    // Navigate to manual address input form or handle the logic
    console.log("Adding manually");
    navigate("/register/step4");
  };

  const handleClose = () => {
    navigate("/register/step2");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <div className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-sm max-h-130">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-lg font-bold">Add address</h2>
          <p className="text-green-500 font-bold text-sm pt-1">3 of 3</p>
        </div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for address"
            className="w-full p-3 border pl-8 text-sm rounded-md mb-1"
          />

          <IoSearch className="absolute text-gray-400  top-4 left-3" />
          <p className="text-xs text-gray-500  text-start  ">
            Your address is not visible to other users
          </p>
        </div>

        <div className="flex  gap-2  mb-24">
          <div className="relative ">
            <button
              onClick={handleUseCurrentLocation}
              className="w-36 p-2 pt-1 border leading-5 h-8 text-end text-blue-600 font-bold text-xs rounded-lg border-pink-300"
            >
              Use current location
            </button>
            <PiMapPinBold className="absolute text-blue-600 stroke-2 font-black stroke-2  h-12 -bottom-2 left-1" />
          </div>
          <button
            onClick={handleAddManually}
            className="w-24 p-0 border leading-5 h-8  text-blue-600 font-bold text-xs rounded-lg border-pink-300"
          >
            Add manually
          </button>
        </div>

        <div className="mb-8  text-gray-700">
          <p className="text-lg font-bold text-start mb-4  ">
            Sharing your address shows:
          </p>
          <div className="flex items-center font-normal mb-2">
            <HiOutlineUsers className="mr-2" />
            <p>People near you</p>
          </div>
          <div className="flex items-center font-normal mb-2">
            <FiClock className="mr-2" />
            <p>Estimated delivery time</p>
          </div>
          <div className="flex font-normal items-center">
            <PiCurrencyDollar className="mr-2" />
            <p>Estimate shipping costs</p>
          </div>
        </div>

        <button onClick={handleClose} className="text-gray-400 border-none">
          <FaTimes className="absolute right-6 top-7 w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
};

export default SignupThree;
