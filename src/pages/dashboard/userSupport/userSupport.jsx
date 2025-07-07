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

  return (
    <div className="px-6 bg-gray-50 min-h-screen font-sans space-y-6">
      <AdminProfile headingText={`User Support`}></AdminProfile>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold mb-6">Tickets</h1>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
              <span>All time</span>
              <X className="w-4 h-4 ml-1 cursor-pointer" />
            </div>
          </div>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 text-sm font-medium border-b">
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
                onClick={()=>{
                  navigate(`${ticket.id}`);
                }}
                key={ticket.id} className="border-b hover:bg-gray-50 cursor-pointer">
                  <td className="py-4 px-2 text-sm text-gray-900">
                    {ticket.id}
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-600 max-w-xs">
                    <div className="truncate">{ticket.description}</div>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-900">
                    {ticket.subject}
                  </td>
                  <td className="py-4 px-2 text-sm">
                    <button
                      onClick={() => handleUserClick(ticket.id)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      {ticket.user}
                    </button>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {ticket.startingDate}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {ticket.closingDate}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-900">
                    {ticket.milestone}
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-900">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      {ticket.amount}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-900">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      {ticket.current}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-sm">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-sm">
                    <button className="text-gray-400 hover:text-gray-600">
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
  <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
    Previous
  </button>
  <div className="text-sm text-gray-600">Page 1 of 10</div>
  <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
    Next
  </button>
</div>


        
      </div>
    </div>
  );
};

export default UserSupport;
