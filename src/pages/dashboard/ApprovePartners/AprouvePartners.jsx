import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
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
  SearchOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import AdminProfile from "../components/AdminProfile";

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

  return (
    <div className="px-6 bg-gray-50 min-h-screen">

        <AdminProfile headingText="Approve Partners" ></AdminProfile>
      <div className="my-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Review and approve partner applications
        </h2>
        {/* <p className="text-gray-600">Review and approve partner applications</p> */}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-800">
              Partner Applications
            </h3>
            <Search
              placeholder="Search partners..."
              allowClear
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: 300 }}
              prefix={<SearchOutlined />}
            />
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredPartners}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: false,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} partners`,
            className: "px-6",
          }}
          className="custom-table"
          rowClassName="hover:bg-gray-50"
        />
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
