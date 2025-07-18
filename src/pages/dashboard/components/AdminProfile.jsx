import React, { useContext, useState } from "react";
import profile from "../../../assets/profile.png";
import { FaSearch } from "react-icons/fa";
import { PiBell } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";
import { DownCircleOutlined } from "@ant-design/icons";

const AdminProfile = ({ headingText = "Users Management" }) => {
  const { user, logOut } = useContext(AuthContext);

  const role = "Admin";
  const name = "Ar Raihan";

  const navigate = useNavigate();

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

  const [modalOpen, setModalOpen] = useState(false);

  const handleNotification = () => {
    // setModalOpen(!modalOpen);
    navigate("/dashboard/notification");
    console.log(modalOpen);
  };

  const notifications = [
    { id: 1, text: "You have a new message from John." },
    { id: 2, text: "Your book has been borrowed successfully." },
    { id: 3, text: "Admin approved your request." },
    { id: 4, text: "Admin approved your request." },
    { id: 5, text: "Admin approved your request." },
    { id: 6, text: "Admin approved your request." },
    { id: 7, text: "Admin approved your request." },
    { id: 8, text: "Admin approved your request." },
    { id: 9, text: "Admin approved your request." },
    { id: 10, text: "Admin approved your request." },
    { id: 11, text: "Admin approved your request." },
    { id: 12, text: "Admin approved your request." },
    { id: 13, text: "Admin approved your request." },
    { id: 14, text: "Admin approved your request." },
  ];

  // console.log(user);
  return (
    <div className="flex items-center justify-between  sticky top-0 md:top-2 w-full md:w-[98%] px-2 md:px-6 py-8 md:py-4 gap-2 bg-white rounded-md shadow z-20">
      {/* Left dynamic text */}
      <h1 className="text-xs md:text-2xl  ml-12 font-bold text-darkGray">{headingText}</h1>

      {/* Right-side controls */}
      <div className="flex items-center gap-4">
        {/* Search box */}
        <div className="flex  items-center md:min-w-[20rem] justify-between min-h-12 gap-2 bg-white rounded-md px-4 py-2 border border-gray-200 shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm text-[#88755A] bg-transparent placeholder:text-[#88755A] w-full"
          />
          <CiSearch className="text-[#88755A]  text-3xl" />
        </div>

        {/* Bell Icon with notification */}
        <div className="relative  md:block">
          {/* Bell Icon */}
          <div
            onClick={handleNotification}
            className="relative cursor-pointer md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center shadow-sm border border-lightGrayBorders"
          >
            <PiBell className="text-[#88755A] text-2xl" />
            <span className="absolute -top-[2px] md:top-[8px] -right-[0px] w-[10px] h-[10px] bg-brandRed rounded-full" />
          </div>


        </div>

        <div className="relative group flex items-center">
          {/* Profile Image */}
          <div className="flex gap-2">
            <div
              onClick={() => {
                navigate("/dashboard/update-profile");
              }}
              className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
            >
              <img
                src={profile}
                alt="Admin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-brandGray font-semibold hidden md:block">
              <p>{user?.displayName ? user.displayName : name}</p>
              <p> {role}</p>
            </div>
          </div>

          {/* Name Popup */}
          {/* {user?.displayName && (
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
        text-brandGray
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
          )} */}

          {/* Logout Button */}
          {/* <button
            onClick={logOutUser}
            className="
      absolute
      top-full
      mt-0
      left-1/2
      -translate-x-1/2
      bg-orangePrimary
      border
      text-brandGray
      shadow
      px-5
      py-2
      text-sm
      rounded
      font-semibold
      opacity-0
      group-hover:opacity-100
      transition
      hover:bg-[#ffcc80]
      hover:border-gray-400
    "
          >
            Logout
          </button> */}
        </div>

        {/* <div className="relative group flex items-center">
          
          <div className="flex gap-2">
            <div
              onClick={() => {
                console.log("tapped")
              }}
              className="w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm cursor-pointer"
            >
              <DownCircleOutlined className="w-full h-full text-4xl" />
             
            </div>
            
          </div>
        </div> */}



      </div>
    </div>
  );
};

export default AdminProfile;
