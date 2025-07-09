import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Info, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

const users = [
  {
    id: "1981849262",
    name: "John Doe",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "19818492345235235263",
    name: "Jane Smith",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "198184924534364",
    name: "Robert Johnson",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: "1981849265",
    name: "Alice Brown",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: "1981849266",
    name: "Michael Lee",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    id: "19812352345243849263",
    name: "Jane Smith",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "1981345345849264",
    name: "Robert Johnson",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: "19818492345634565",
    name: "Alice Brown",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: "198184932456346345266",
    name: "Michael Lee",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    id: "198184233456345642349263",
    name: "Jane Smith",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "19818493463465345264",
    name: "Robert Johnson",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: "193635634681849265",
    name: "Alice Brown",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: "19818767849266",
    name: "Michael Lee",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    id: "1981823423449263",
    name: "Jane Smith",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "19818494678467264",
    name: "Robert Johnson",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: "198184947467265",
    name: "Alice Brown",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: "1981844574579266",
    name: "Michael Lee",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  const usersPerPage = 10;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.includes(searchTerm) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Users</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="overflow-x-auto border rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Joined</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Level</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Earnings</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentUsers.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{user.id}</td>
                <td className="px-4 py-4 flex items-center gap-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{user.name}</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{user.joined}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    ↑ {user.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{user.level}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{user.role}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">
                  {user.earnings}
                </td>
                <td className="px-4 py-4 text-center">
                  <button
                  onClick={
                    ()=>{
                      navigate(`/dashboard/user-info/details/${user.id}`)
                    }
                  }
                  className="text-gray-500 hover:text-gray-700">
                    <Info size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
            </div>

            <div className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;