import React, { useState } from "react";
import {
  Table,
  Button,
  Input,
  Space,
  Avatar,
  Tag,
  message,
  Popconfirm,
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import AdminProfile from "../components/AdminProfile";
import { useEffect } from "react";

const { Search } = Input;

const ApprovePartners = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [partners, setPartners] = useState([
    {
      id: "1981849262",
      name: "John Doe",
      appliedDate: "12 Dec 2023",
      role: "Business Partner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849263",
      name: "Jane Smith",
      appliedDate: "15 Dec 2023",
      role: "Service Provider",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849264",
      name: "Robert Johnson",
      appliedDate: "18 Dec 2023",
      role: "Business Partner",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849265",
      name: "Alice Brown",
      appliedDate: "20 Dec 2023",
      role: "Service Provider",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849266",
      name: "Michael Lee",
      appliedDate: "22 Dec 2023",
      role: "Business Partner",
      image: "https://randomuser.me/api/portraits/men/72.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849267",
      name: "Sarah Wilson",
      appliedDate: "25 Dec 2023",
      role: "Service Provider",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849268",
      name: "David Martinez",
      appliedDate: "28 Dec 2023",
      role: "Business Partner",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849269",
      name: "Emily Davis",
      appliedDate: "30 Dec 2023",
      role: "Service Provider",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849270",
      name: "Chris Anderson",
      appliedDate: "02 Jan 2024",
      role: "Business Partner",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981849271",
      name: "Lisa Taylor",
      appliedDate: "05 Jan 2024",
      role: "Service Provider",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "198231849271",
      name: "Lisa Taylor",
      appliedDate: "05 Jan 2024",
      role: "Service Provider",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
    {
      id: "1981823449271",
      name: "Lisa Taylor",
      appliedDate: "05 Jan 2024",
      role: "Service Provider",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      email: "asdf@asdf.com",
      status: "pending",
    },
  ]);

  const handleApprove = (partnerId, partnerName) => {
    setPartners(
      partners.map((partner) =>
        partner.id === partnerId ? { ...partner, status: "approved" } : partner
      )
    );
    message.success(`${partnerName} has been approved as a business partner!`);
  };

  const handleReject = (partnerId, partnerName) => {
    setPartners(
      partners.map((partner) =>
        partner.id === partnerId ? { ...partner, status: "rejected" } : partner
      )
    );
    message.error(
      `${partnerName}'s partnership application has been rejected.`
    );
  };

  const filteredPartners = partners.filter(
    (partner) =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.id.includes(searchTerm) ||
      partner.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: "Partner ID",
      dataIndex: "id",
      key: "id",
      width: 120,
      render: (text) => (
        <span className="text-gray-600 font-mono text-sm">{text}</span>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar src={record.image} icon={<UserOutlined />} size={40} />
          <span className="font-medium text-gray-800">{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "appliedDate",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
      key: "appliedDate",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => (
        <Tag color="#ffc983" className="border-none text-gray-700 font-medium">
          {text}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const statusConfig = {
          pending: { color: "#ffc983", text: "Pending" },
          approved: { color: "#52c41a", text: "Approved" },
          rejected: { color: "#ff4d4f", text: "Rejected" },
        };
        return (
          <Tag
            color={statusConfig[status].color}
            className="border-none font-medium"
          >
            {statusConfig[status].text}
          </Tag>
        );
      },
    },

    {
      title: "Actions",
      key: "actions",
      width: 200,
      render: (_, record) => (
        <Space size="small">
          {record.status === "pending" && (
            <>
              <Popconfirm
                title="Approve Partner"
                description={`Are you sure you want to approve ${record.name} as a business partner?`}
                onConfirm={() => handleApprove(record.id, record.name)}
                okText="Yes, Approve"
                cancelText="Cancel"
                okButtonProps={{
                  style: { backgroundColor: "#ffc983", borderColor: "#ffc983" },
                }}
                icon={<CheckOutlined style={{ color: "#52c41a" }} />}
              >
                <Button
                  type="primary"
                  size="small"
                  icon={<CheckOutlined />}
                  style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
                >
                  Approve
                </Button>
              </Popconfirm>

              <Popconfirm
                title="Reject Partner"
                description={`Are you sure you want to reject ${record.name}'s partnership application?`}
                onConfirm={() => handleReject(record.id, record.name)}
                okText="Yes, Reject"
                cancelText="Cancel"
                okButtonProps={{
                  style: { backgroundColor: "#ff4d4f", borderColor: "#ff4d4f" },
                }}
                icon={
                  <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />
                }
              >
                <Button
                  type="primary"
                  size="small"
                  danger
                  icon={<CloseOutlined />}
                >
                  Reject
                </Button>
              </Popconfirm>
            </>
          )}
          {record.status === "approved" && (
            <Tag color="#52c41a" className="border-none font-medium">
              <CheckOutlined /> Approved
            </Tag>
          )}
          {record.status === "rejected" && (
            <Tag color="#ff4d4f" className="border-none font-medium">
              <CloseOutlined /> Rejected
            </Tag>
          )}
        </Space>
      ),
    },
  ];

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

  // pegination fucn
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const handleTableChange = (pagination) => {
    console.log(pagination);
    console.log(pagination.current, pagination.pageSize);
  };

  return (
<div className="px-2 sm:px-6 bg-gray-50 min-h-screen">
  <AdminProfile headingText="Approve Partners" />

  {/* Title + Filters Section */}
  <div className="my-4 sm:my-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
      Review and approve partner applications
    </h2>

    {/* Filters */}
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full md:w-auto">
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

  {/* Table Wrapper for Mobile Responsiveness */}
  <div className="overflow-x-auto md:min-w-[600px] max-w-[24rem] md:max-w-full mx-auto  rounded-lg shadow-sm border border-gray-200 w-full">
    <div className=" ">
      <Table
        columns={columns}
        dataSource={filteredPartners}
        rowKey="id"
        pagination={{
          ...pagination,
          position: ["bottomCenter"],
          showSizeChanger: false,
          showQuickJumper: false,
          className: "px-6",
        }}
        onChange={handleTableChange}
        className="custom-table"
        rowClassName="hover:bg-gray-50"
        scroll={{ x: 900 }}
      />
    </div>
  </div>

  <style jsx>{`
    .custom-table .ant-table-thead > tr > th {
      background-color: #f8f9fa;
      border-bottom: 2px solid #e9ecef;
      font-weight: 600;
      color: #495057;
    }

    .custom-table .ant-table-tbody > tr > td {
      border-bottom: 1px solid #f1f3f5;
      padding: 16px;
    }

    .custom-table .ant-table-tbody > tr:hover > td {
      background-color: #f8f9fa;
    }

    .ant-btn-primary {
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    }

    .ant-btn-primary:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  `}</style>
</div>

  );
};

export default ApprovePartners;
