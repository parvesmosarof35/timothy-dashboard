import React, { useContext } from "react";
import profile from "../../../assets/profile.png";
import { FaSearch } from "react-icons/fa";
import { PiBell } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { DollarSign } from "lucide-react";

const AdminProfile = ({ headingText = "Users Management" }) => {
  const { user, logOut } = useContext(AuthContext);

  const logOutUser = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire(
            "Logged out!",
            "You have been logged out successfully.",
            "success"
          );
        });
      }
    });
  };

  // console.log(user);
  return (
    <div className="flex items-center justify-between w-full px-6 py-8 bg-white rounded-md">
      {/* Left dynamic text */}
      <h1 className="text-2xl font-bold text-[#1E1A14]">{headingText}</h1>

      {/* Right-side controls */}
      <div className="flex items-center gap-4">
        {/* Search box */}
        <div className="flex items-center min-w-[20rem] justify-between min-h-12 gap-2 bg-white rounded-md px-4 py-2 border border-gray-200 shadow-sm">
          <input
            type="text"
            placeholder="Search Task"
            className="outline-none text-sm text-[#88755A] bg-transparent placeholder:text-[#88755A] w-full"
          />
          <CiSearch className="text-[#88755A]  text-3xl" />
        </div>

        {/* Total Issues */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-[#FFD69B] rounded-md flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <p className="text-md text-gray-500 ">Admin Earnings</p>
            <p className="text-lg font-bold text-gray-900">120</p>
          </div>
        </div>

        {/* Bell Icon with notification */}
        <div className="relative w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200">
          <PiBell className="text-[#88755A] text-xl" /> {/* Made bigger */}
          <span className="absolute top-[8px] right-[8px] w-[10px] h-[10px] bg-red-500 rounded-full" />
        </div>

        <div className="relative group flex items-center">
          {/* Profile Image */}
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
            <img
              src={profile}
              alt="Admin"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name Popup */}
          {user?.displayName && (
            <div
              className="
        absolute
        top-[90px]
        left-1/2
        -translate-x-1/2
        px-3
        py-1
        text-xs
        bg-white
        text-gray-600
        border
        rounded
        opacity-0
        group-hover:opacity-100
        transition
        pointer-events-none
        whitespace-nowrap
        shadow
      "
            >
              {user.displayName}
            </div>
          )}

          {/* Logout Button */}
          <button
            onClick={logOutUser}
            className="
      absolute
      top-full
      mt-0
      left-1/2
      -translate-x-1/2
      bg-[#ffd69b]
      border
      border-gray-300
      shadow
      px-5
      py-2
      text-sm
      rounded
      font-semibold
      text-gray-700
      opacity-0
      group-hover:opacity-100
      transition
      hover:bg-[#ffcc80]
      hover:border-gray-400
    "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
