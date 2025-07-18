import { useState } from "react";
import { Info } from "lucide-react";
import AdminProfile from "../components/AdminProfile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Table } from "antd";

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
    id: "1981849234263",
    name: "Jane Smith",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "1981849264",
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
    id: "1981849264",
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
];

const ServiceProvider = () => {
  const navigate = useNavigate();
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
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record.image}
            alt={text}
            className="w-7 h-7 rounded-full object-cover"
          />
          <span>{text}</span>
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
            navigate(`/dashboard/service-provider/details/${record.id}`)
          }
          className="text-brandGray hover:text-darkGray"
        >
          <Info size={16} />
        </button>
      ),
    },
  ];

  return (
    <div className="px-0 sm:px-6">
      <AdminProfile headingText="Manage Partners" />

      <div className="p-4 sm:p-6 bg-grayLightBg min-h-screen font-sans">
        {/* Header + Filters */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Our Partners</h2>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:items-center w-full md:w-auto">
            {/* Time Filter */}
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="border px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
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
              className="border px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ae">United Arab Emirates</option>
              <option value="pt">Portugal</option>
              <option value="fr">France</option>
              <option value="es">Spain</option>
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              value={searchTerms}
              onChange={(e) => setSearchTerms(e.target.value)}
              className="border px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border rounded-lg bg-white max-w-[20rem] mx-auto md:max-w-full">
          <Table
            columns={columns}
            dataSource={filteredUsers}
            rowKey="id"
            pagination={{
              current: currentPage,
              pageSize: usersPerPage,
              total: filteredUsers.length,
              onChange: setCurrentPage,
              showSizeChanger: false,
            }}
            scroll={{ x: 900 }}
          />

          <style jsx>{`
            .ant-table-pagination {
              display: flex;
              justify-content: center !important;
              padding: 16px;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
