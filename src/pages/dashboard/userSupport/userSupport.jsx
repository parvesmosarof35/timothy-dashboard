import React, { useState } from "react";
import {
  Search,
  MoreHorizontal,
  X,
  User,
  Calendar,
  DollarSign,
  AlertCircle,
} from "lucide-react";
import AdminProfile from "../components/AdminProfile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserSupport = () => {
  const navigate = useNavigate();
  const [tickets] = useState([
    {
      id: "Y9618A9Q2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "Y9618A9Q3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "Y9618A9Q4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "Y9618A9Q5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "Y9618A9Q6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "Y9618A9Q7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "Y9618A9Q8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "Y9618A9Q9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "Y9618A9Q10",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus voluptatem pariatur asperiores labore beatae maxime culpa et in veniam soluta eveniet ducimus, odio dicta, quam assumenda placeat cupiditate quisquam!",
      subject: "Suspend",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      closingDate: "04 Jan 2024",
      milestone: "Olid Ok",
      amount: "$260",
      current: "$60",
      status: "Active",
    },
  ]);

  const handleUserClick = (userId) => {
    console.log("User ID:", userId);
  };

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchTerms, setSearchTerms] = useState("");

  // Auto filter trigger
  useEffect(() => {
    handleSelect();
  }, [selectedTime, selectedCountry, searchTerms]);

  const handleSelect = () => {
    console.log("Filter Applied:", {
      time: selectedTime,
      country: selectedCountry,
      search: searchTerms,
    });
  };

  return (
    <div className="px-6 bg-grayLightBg min-h-screen font-sans space-y-6">
      <AdminProfile headingText={`User Support`}></AdminProfile>

      <div className="px-6">
        {/* Header */}
        <div className="mb-8 flex justify-between">
          <h1 className="text-2xl font-semibold mb-6 text-darkGray">
            Contracts
          </h1>

          {/* search filter  */}

          <div className="flex gap-3 items-center flex-wrap">
            {/* Time Filter */}
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="border px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>

            {/* Country Filter */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border px-2 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="us">United States </option>
              <option value="uk">United Kingdom</option>
              <option value="ae">United Arab Emirates</option>
              <option value="pt">Portugal</option>
              <option value="fr">France</option>
              <option value="bd">Bangladesh</option>
              <option value="es">Spain</option>
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              value={searchTerms}
              onChange={(e) => setSearchTerms(e.target.value)}
              className="border px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-0">
            <div className="flex items-center gap-4">
              {/* <div className="flex items-center gap-1 bg-orangeLightBg text-orange-700 px-3 py-1 rounded-full text-sm">
              <span>All time</span>
              <X className="w-4 h-4 ml-1 cursor-pointer" />
            </div> */}
            </div>
            {/* <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-brandGray" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border text-brandGray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div> */}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-brandGray text-sm font-medium border-b">
                  <th className="pb-3 px-2">ID</th>
                  <th className="pb-3 px-2">Description</th>
                  <th className="pb-3 px-2">Subject</th>
                  <th className="pb-3 px-2">User</th>
                  <th className="pb-3 px-2">Starting Date</th>
                  <th className="pb-3 px-2">Closing Date</th>
                  <th className="pb-3 px-2">Milestone</th>
                  <th className="pb-3 px-2">All Amount</th>
                  <th className="pb-3 px-2">Current</th>
                  <th className="pb-3 px-2">Status</th>
                  <th className="pb-3 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, index) => (
                  <tr
                    onClick={() => {
                      navigate(`${ticket.id}`);
                    }}
                    key={ticket.id}
                    className="border-b hover:bg-grayLightBg cursor-pointer"
                  >
                    <td className="py-4 px-2 text-sm text-darkGray">
                      {ticket.id}
                    </td>
                    <td className="py-4 px-2 text-sm text-brandGray max-w-xs">
                      <div className="truncate">{ticket.description}</div>
                    </td>
                    <td className="py-4 px-2 text-sm text-darkGray">
                      {ticket.subject}
                    </td>
                    <td className="py-4 px-2 text-sm">
                      <button
                        onClick={() => handleUserClick(ticket.id)}
                        className="flex items-center gap-2 text-darkGray transition-colors"
                      >
                        <User className="w-4 h-4" />
                        {ticket.user}
                      </button>
                    </td>
                    <td className="py-4 px-2 text-sm text-brandGray">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-brandGray" />
                        {ticket.startingDate}
                      </div>
                    </td>
                    <td className="py-4 px-2 text-sm text-brandGray">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-brandGray" />
                        {ticket.closingDate}
                      </div>
                    </td>
                    <td className="py-4 px-2 text-sm text-darkGray">
                      {ticket.milestone}
                    </td>
                    <td className="py-4 px-2 text-sm text-darkGray">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-brandGray" />
                        {ticket.amount}
                      </div>
                    </td>
                    <td className="py-4 px-2 text-sm text-darkGray">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-brandGray" />
                        {ticket.current}
                      </div>
                    </td>
                    <td className="py-4 px-2 text-sm">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-greenMutedBg text-brandGreen">
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-sm">
                      <button className="text-brandGray hover:text-brandGray">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <button className="px-3 py-1 text-sm text-brandGray hover:text-darkGray">
              Previous
            </button>
            <div className="text-sm text-brandGray">Page 1 of 10</div>
            <button className="px-3 py-1 text-sm text-brandBlue hover:text-blue-800">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSupport;
