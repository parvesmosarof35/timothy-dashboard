import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Info, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Table } from "antd";
import { useMemo } from "react";

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

  const filteredUsers = users.filter(
    (user) =>
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










  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record.image}
            alt={text}
            className="w-6 h-6 rounded-full object-cover"
          />
          {text}
        </div>
      ),
    },
    { title: "Joined", dataIndex: "joined", key: "joined" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Level", dataIndex: "level", key: "level" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Earnings", dataIndex: "earnings", key: "earnings" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <button
          onClick={() =>
            navigate(`/dashboard/user-info/details/${record.id}`)
          }
          className="text-brandGray hover:text-darkGray"
        >
          <Info size={16} />
        </button>
      ),
    },
     ];







  return (
    <div className="p-6 bg-grayLightBg min-h-screen font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Users</h2>

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

      <div className="overflow-x-auto border rounded-lg bg-white">







<div className="overflow-x-auto">
  <Table
    columns={columns}
    dataSource={filteredUsers}
    rowKey="id"
    scroll={{ x: 800 }}
    pagination={{
      current: currentPage,
      pageSize: usersPerPage,
      total: filteredUsers.length,
      onChange: setCurrentPage,
      showSizeChanger: false,
    }}
  />
</div>

<style jsx>{`
  .ant-table-pagination {
    display: flex;
    justify-content: center !important; /* center align */
    padding: 16px;
  }
`}</style>



        {/* <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-darkGray">
                ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-darkGray">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-darkGray">
                Joined
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-darkGray">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-darkGray">
                Level
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-darkGray">
                Role
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-darkGray">
                Earnings
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-darkGray">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentUsers.map((user, index) => (
              <tr key={user.id} className="hover:bg-grayLightBg">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-darkGray">
                  {user.id}
                </td>
                <td className="px-4 py-4 flex items-center gap-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-darkGray">
                    {user.name}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-darkGray">
                  {user.joined}
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-greenMutedBg text-brandGreen">
                    ↑ {user.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-darkGray">
                  {user.level}
                </td>
                <td className="px-4 py-4 text-sm text-darkGray">{user.role}</td>
                <td className="px-4 py-4 text-sm font-semibold text-darkGray">
                  {user.earnings}
                </td>
                <td className="px-4 py-4 text-center">
                  <button
                    onClick={() => {
                      navigate(`/dashboard/user-info/details/${user.id}`);
                    }}
                    className="text-brandGray hover:text-darkGray"
                  >
                    <Info size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}

        {/* Pagination */}
        {/* <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-3 py-2 text-sm text-darkGray hover:bg-grayLightBg rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
            </div>

            <div className="text-sm text-darkGray">
              Page {currentPage} of {totalPages}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-3 py-2 text-sm text-darkGray hover:bg-grayLightBg rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div> */}



      </div>
    </div>
  );
};

export default UsersTable;
