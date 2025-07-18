import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  X,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AdminProfile from "../components/AdminProfile";
import { useEffect } from "react";
import { Pagination, Table } from "antd";

const FinancialPayments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  // Mock data for payments
  const payments = [
    {
      id: "198184926223",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      paymentType: "Incoming",
      date: "12 Dec 2023",
      user: "John Doe",
      partner: "Sureman",
      orderId: "84984948494",
      status: "Active",
      amount: "$260",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      paymentType: "Incoming",
      date: "12 Dec 2023",
      user: "John Doe",
      partner: "Sureman",
      orderId: "84984948494",
      status: "Active",
      amount: "$260",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      paymentType: "Incoming",
      date: "12 Dec 2023",
      user: "John Doe",
      partner: "Sureman",
      orderId: "84984948494",
      status: "Active",
      amount: "$260",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      paymentType: "Incoming",
      date: "12 Dec 2023",
      user: "John Doe",
      partner: "Sureman",
      orderId: "84984948494",
      status: "Active",
      amount: "$260",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      paymentType: "Incoming",
      date: "12 Dec 2023",
      user: "John Doe",
      partner: "Sureman",
      orderId: "84984948494",
      status: "Active",
      amount: "$260",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      paymentType: "Incoming",
      date: "12 Dec 2023",
      user: "John Doe",
      partner: "Sureman",
      orderId: "84984948494",
      status: "Active",
      amount: "$260",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      paymentType: "Incoming",
      date: "12 Dec 2023",
      user: "John Doe",
      partner: "Sureman",
      orderId: "84984948494",
      status: "Active",
      amount: "$260",
    },
    {
      id: "1981849262",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
      paymentType: "Incoming",
      date: "12 Dec 2023",
      user: "John Doe",
      partner: "Sureman",
      orderId: "84984948494",
      status: "Active",
      amount: "$260",
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
  const [pageSize] = useState(5);

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
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <span className="text-brandGray">{text}</span>,
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
      render: (type) => (
        <span className="inline-flex items-center gap-1 text-sm text-brandGreen">
          <span className="w-2 h-2 bg-brandGreen rounded-full"></span>
          {type}
        </span>
      ),
    },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "User", dataIndex: "user", key: "user" },
    { title: "Partner", dataIndex: "partner", key: "partner" },
    { title: "Order ID", dataIndex: "orderId", key: "orderId" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span className="inline-flex items-center gap-1 text-sm text-brandGreen">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {status}
        </span>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <span className="text-sm font-medium text-darkGray">{amount}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <button className="text-brandGray hover:text-brandGray">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div className="px-0 sm-px-6 bg-grayLightBg min-h-screen font-sans">
      <AdminProfile headingText={`Payments`}></AdminProfile>

      <div className="min-h-screen bg-grayLightBg p-6">
        <div className=" mx-auto">
          {/* Header */}
          <div className="mb-6 flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
            <h1 className="text-xl sm:text-2xl font-semibold text-darkGray">
              Payments
            </h1>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
              {/* Time Filter */}
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="border w-full sm:w-auto px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="border w-full sm:w-auto px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="border w-full sm:w-auto px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Filters and Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 pb-6">
            {/* Table */}
            <div className="overflow-scroll w-[20rem] md:w-full mx-auto">
              <Table
                columns={columns}
                dataSource={payments.slice(
                  (currentPage - 1) * pageSize,
                  currentPage * pageSize
                )}
                pagination={false}
                rowKey="id"
              />

              <div className="mt-4 text-center">
                <Pagination
                  current={currentPage}
                  total={payments.length}
                  pageSize={pageSize}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                  align="center"
                />
              </div>
            </div>

            {/* Pagination */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPayments;
