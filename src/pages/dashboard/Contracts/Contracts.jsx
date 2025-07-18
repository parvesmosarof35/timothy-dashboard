import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import AdminProfile from "../components/AdminProfile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Table } from "antd";

const Contracts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const navigate = useNavigate();

  // Mock data for contracts
  const contracts = [
    {
      id: "1981812312",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      category: "Sureman",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      finishingDate: "04 Jan 2024",
      milestones: "01 of 06",
      allAmount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "19814565787",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      category: "Sureman",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      finishingDate: "04 Jan 2024",
      milestones: "01 of 06",
      allAmount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      category: "Sureman",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      finishingDate: "04 Jan 2024",
      milestones: "01 of 06",
      allAmount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      category: "Sureman",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      finishingDate: "04 Jan 2024",
      milestones: "01 of 06",
      allAmount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      category: "Sureman",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      finishingDate: "04 Jan 2024",
      milestones: "01 of 06",
      allAmount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      category: "Sureman",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      finishingDate: "04 Jan 2024",
      milestones: "01 of 06",
      allAmount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      category: "Sureman",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      finishingDate: "04 Jan 2024",
      milestones: "01 of 06",
      allAmount: "$260",
      current: "$60",
      status: "Active",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      category: "Sureman",
      user: "John Doe",
      startingDate: "12 Dec 2023",
      finishingDate: "04 Jan 2024",
      milestones: "01 of 06",
      allAmount: "$260",
      current: "$60",
      status: "Active",
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
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
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <span className="text-brandGray">{text}</span>,
    },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "User", dataIndex: "user", key: "user" },
    { title: "Starting Date", dataIndex: "startingDate", key: "startingDate" },
    {
      title: "Finishing Date",
      dataIndex: "finishingDate",
      key: "finishingDate",
    },
    { title: "Milestones", dataIndex: "milestones", key: "milestones" },
    { title: "All Amount", dataIndex: "allAmount", key: "allAmount" },
    { title: "Current", dataIndex: "current", key: "current" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span className="inline-flex items-center gap-1 text-sm text-brandGreen">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <button className="text-brandGray hover:text-brandGray">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      ),
    },
  ];

  const pageSize = 5;
  const filteredContracts = contracts.filter((item) =>
    item.description.toLowerCase().includes(searchTerms.toLowerCase())
  );

  return (
    <div className="md:px-6 px-0 bg-grayLightBg min-h-screen font-sans">
      <AdminProfile headingText={`Contracts`}></AdminProfile>
      <div className="min-h-screen bg-grayLightBg p-6 font-sans">
        <div className=" mx-auto">
          {/* Header */}
          <div className="mb-6 flex flex-col md:flex-row md:justify-between gap-4 md:items-center">
            <h1 className="text-xl sm:text-2xl font-semibold text-darkGray">
              Contracts
            </h1>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
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

          {/* Filters and Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            {/* Table */}
            <div className="overflow-scroll w-[20rem] md:w-full mx-auto">
              <Table
                columns={columns}
                dataSource={filteredContracts}
                rowKey="id"
                pagination={{
                  current: currentPage,
                  pageSize,
                  total: filteredContracts.length,
                  onChange: (page) => setCurrentPage(page),
                  showSizeChanger: false,
                  position: ["bottomCenter"], // center align pagination
                }}
                onRow={(record) => ({
                  onClick: () => navigate(`${record.id}`),
                })}
                scroll={{ x: "max-content" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
