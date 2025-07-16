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
  Drawer,
  Descriptions,
  Typography,
  Card,
} from "antd";
import {
  InfoCircleOutlined,
  PrinterOutlined,
  MailOutlined,
  SearchOutlined,
  UserOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import AdminProfile from "../dashboard/components/AdminProfile";

const { Search } = Input;
const { TextArea } = Input;
const { Title, Text } = Typography;

const SendReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const partners = [
    {
      id: "1981849262",
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      joinedDate: "12 Dec 2023",
      role: "Business Partner",
      status: "Active",
      earnings: "$24,500",
      level: "Premium",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      totalProjects: 15,
      completionRate: "98%",
      rating: 4.9,
    },
    {
      id: "1981849263",
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+1 (555) 234-5678",
      joinedDate: "15 Dec 2023",
      role: "Service Provider",
      status: "Active",
      earnings: "$18,750",
      level: "Standard",
      location: "Los Angeles, USA",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      totalProjects: 12,
      completionRate: "95%",
      rating: 4.7,
    },
    {
      id: "1981849264",
      name: "Robert Johnson",
      email: "robert.johnson@email.com",
      phone: "+1 (555) 345-6789",
      joinedDate: "18 Dec 2023",
      role: "Business Partner",
      status: "Active",
      earnings: "$32,100",
      level: "Premium",
      location: "Chicago, USA",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      totalProjects: 20,
      completionRate: "97%",
      rating: 4.8,
    },
    {
      id: "1981849265",
      name: "Alice Brown",
      email: "alice.brown@email.com",
      phone: "+1 (555) 456-7890",
      joinedDate: "20 Dec 2023",
      role: "Service Provider",
      status: "Inactive",
      earnings: "$12,300",
      level: "Basic",
      location: "Houston, USA",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      totalProjects: 8,
      completionRate: "92%",
      rating: 4.5,
    },
    {
      id: "1981849266",
      name: "Michael Lee",
      email: "michael.lee@email.com",
      phone: "+1 (555) 567-8901",
      joinedDate: "22 Dec 2023",
      role: "Business Partner",
      status: "Active",
      earnings: "$28,900",
      level: "Premium",
      location: "Miami, USA",
      image: "https://randomuser.me/api/portraits/men/72.jpg",
      totalProjects: 18,
      completionRate: "99%",
      rating: 5.0,
    },
  ];

  const handleViewDetails = (partner) => {
    setSelectedPartner(partner);
    setDetailsVisible(true);
  };

  const handlePrint = (partner) => {
    const printContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #ea580c; margin-bottom: 20px;">Partner Report</h2>
        <div style="border: 1px solid #d1d5db; padding: 20px; border-radius: 8px;">
          <h3>${partner.name}</h3>
          <p><strong>Partner ID:</strong> ${partner.id}</p>
          <p><strong>Email:</strong> ${partner.email}</p>
          <p><strong>Phone:</strong> ${partner.phone}</p>
          <p><strong>Role:</strong> ${partner.role}</p>
          <p><strong>Status:</strong> ${partner.status}</p>
          <p><strong>Level:</strong> ${partner.level}</p>
          <p><strong>Earnings:</strong> ${partner.earnings}</p>
          <p><strong>Location:</strong> ${partner.location}</p>
          <p><strong>Joined Date:</strong> ${partner.joinedDate}</p>
          <p><strong>Total Projects:</strong> ${partner.totalProjects}</p>
          <p><strong>Completion Rate:</strong> ${partner.completionRate}</p>
          <p><strong>Rating:</strong> ${partner.rating}/5</p>
        </div>
        <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
          Generated on: ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
    message.success("Report sent to printer!");
  };

  const handleSendEmail = (partner) => {
    setSelectedPartner(partner);
    setEmailVisible(true);
  };

  const handleEmailSubmit = async () => {
    setLoading(true);
    try {
      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 2000));
      message.success(`Report sent successfully to ${selectedPartner?.email}!`);
      setEmailVisible(false);
    } catch (error) {
      message.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredPartners = partners.filter(
    (partner) =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.id.includes(searchTerm) ||
      partner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: "Partner ID",
      dataIndex: "id",
      key: "id",
      width: 120,
      render: (text) => (
        <span style={{ fontFamily: "monospace", color: "#6b7280" }}>
          {text}
        </span>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Avatar src={record.image} icon={<UserOutlined />} size={40} />
          <div>
            <div style={{ fontWeight: 600, color: "#0d0d0d" }}>{text}</div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>
              {record.email}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => (
        <Tag
          style={{
            backgroundColor: "#fff0dd",
            color: "#ea580c",
            border: "none",
            fontWeight: 500,
          }}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          style={{
            backgroundColor: status === "Active" ? "#dcfce7" : "#fef2f2",
            color: status === "Active" ? "#009106" : "#ef4444",
            border: "none",
            fontWeight: 500,
          }}
        >
          {status}
        </Tag>
      ),
    },
    // {
    //   title: 'Level',
    //   dataIndex: 'level',
    //   key: 'level',
    //   render: (text) => (
    //     <Tag style={{
    //       backgroundColor: '#dbeafe',
    //       color: '#1e40af',
    //       border: 'none',
    //       fontWeight: 500
    //     }}>
    //       {text}
    //     </Tag>
    //   )
    // },
    {
      title: "Earnings",
      dataIndex: "earnings",
      key: "earnings",
      render: (text) => (
        <span style={{ fontWeight: 600, color: "#0d0d0d" }}>{text}</span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: 200,
      render: (_, record) => (
        <Space size="small">
          <Button
            type="text"
            icon={<InfoCircleOutlined />}
            onClick={() => handleViewDetails(record)}
            style={{ color: "#1e40af" }}
          >
            Details
          </Button>
          <Button
            type="text"
            icon={<PrinterOutlined />}
            onClick={() => handlePrint(record)}
            style={{ color: "#6b7280" }}
          >
            Print
          </Button>
          <Button
            type="text"
            icon={<MailOutlined />}
            onClick={() => handleSendEmail(record)}
            style={{ color: "#ea580c" }}
          >
            Email
          </Button>
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

  return (
    <div className="px-6">
      <AdminProfile headingText="Notificaiton page"></AdminProfile>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
          padding: "24px",
        }}
      >
        <div
          style={{ marginBottom: "24px" }}
          className="flex py-4 justify-between items-center"
        >
          <div>
            <Title level={2} style={{ color: "#0d0d0d", marginBottom: "8px" }}>
              Send Report
            </Title>
            <Text style={{ color: "#6b7280" }}>
              Generate and send partner reports
            </Text>
          </div>

          <div>
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
        </div>

        <Card
          style={{
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #d1d5db",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            {/* <Title level={4} style={{ color: '#0d0d0d', margin: 0 }}>
            Partner Reports
          </Title> */}
            {/* <Search
            placeholder="Search partners..."
            allowClear
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 300 }}
          /> */}
          </div>

          <Table
            columns={columns}
            dataSource={filteredPartners}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: false,
              showQuickJumper: false,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} partners`,
            }}
            style={{ backgroundColor: "white" }}
          />
        </Card>

        {/* Details Drawer */}
        <Drawer
          title={
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Avatar
                src={selectedPartner?.image}
                icon={<UserOutlined />}
                size={40}
              />
              <div>
                <div style={{ fontWeight: 600, color: "#0d0d0d" }}>
                  {selectedPartner?.name}
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>
                  Partner Details
                </div>
              </div>
            </div>
          }
          placement="right"
          onClose={() => setDetailsVisible(false)}
          open={detailsVisible}
          width={500}
        >
          {selectedPartner && (
            <div>
              <Descriptions bordered column={1} size="middle">
                <Descriptions.Item label="Partner ID">
                  <span style={{ fontFamily: "monospace", color: "#6b7280" }}>
                    {selectedPartner.id}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  <span style={{ color: "#1e40af" }}>
                    {selectedPartner.email}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item label="Phone">
                  <span style={{ color: "#0d0d0d" }}>
                    {selectedPartner.phone}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item label="Role">
                  <Tag
                    style={{
                      backgroundColor: "#fff0dd",
                      color: "#ea580c",
                      border: "none",
                    }}
                  >
                    {selectedPartner.role}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                  <Tag
                    style={{
                      backgroundColor:
                        selectedPartner.status === "Active"
                          ? "#dcfce7"
                          : "#fef2f2",
                      color:
                        selectedPartner.status === "Active"
                          ? "#009106"
                          : "#ef4444",
                      border: "none",
                    }}
                  >
                    {selectedPartner.status}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Level">
                  <Tag
                    style={{
                      backgroundColor: "#dbeafe",
                      color: "#1e40af",
                      border: "none",
                    }}
                  >
                    {selectedPartner.level}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Location">
                  {selectedPartner.location}
                </Descriptions.Item>
                <Descriptions.Item label="Joined Date">
                  {selectedPartner.joinedDate}
                </Descriptions.Item>
                <Descriptions.Item label="Earnings">
                  <span style={{ fontWeight: 600, color: "#009106" }}>
                    {selectedPartner.earnings}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item label="Total Projects">
                  {selectedPartner.totalProjects}
                </Descriptions.Item>
                <Descriptions.Item label="Completion Rate">
                  <span style={{ color: "#009106" }}>
                    {selectedPartner.completionRate}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item label="Rating">
                  <span style={{ color: "#ea580c", fontWeight: 600 }}>
                    {selectedPartner.rating}/5
                  </span>
                </Descriptions.Item>
              </Descriptions>

              <div style={{ marginTop: "24px", textAlign: "right" }}>
                <Space>
                  <Button
                    icon={<PrinterOutlined />}
                    onClick={() => handlePrint(selectedPartner)}
                    style={{
                      backgroundColor: "#f9fafb",
                      borderColor: "#d1d5db",
                      color: "#6b7280",
                    }}
                  >
                    Print Report
                  </Button>
                  <Button
                    type="primary"
                    icon={<MailOutlined />}
                    onClick={() => handleSendEmail(selectedPartner)}
                    style={{
                      backgroundColor: "#ea580c",
                      borderColor: "#ea580c",
                    }}
                  >
                    Send Email
                  </Button>
                </Space>
              </div>
            </div>
          )}
        </Drawer>

        {/* Email Modal */}
        <Modal
          title={
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MailOutlined style={{ color: "#ea580c" }} />
              <span>Send Report Email</span>
            </div>
          }
          open={emailVisible}
          onCancel={() => setEmailVisible(false)}
          footer={null}
          width={600}
        >
          <div>
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 500,
                }}
              >
                Recipient Email
              </label>
              <Input
                prefix={<MailOutlined />}
                placeholder="Enter recipient email"
                defaultValue={selectedPartner?.email}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 500,
                }}
              >
                Subject
              </label>
              <Input
                placeholder="Enter email subject"
                defaultValue={`Partner Report - ${selectedPartner?.name}`}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 500,
                }}
              >
                Message
              </label>
              <TextArea
                rows={8}
                placeholder="Enter your message here..."
                defaultValue={
                  selectedPartner
                    ? `Dear ${selectedPartner.name},

Please find your partner report details below:

Partner ID: ${selectedPartner.id}
Status: ${selectedPartner.status}
Level: ${selectedPartner.level}
Earnings: ${selectedPartner.earnings}
Total Projects: ${selectedPartner.totalProjects}
Completion Rate: ${selectedPartner.completionRate}
Rating: ${selectedPartner.rating}/5

Best regards,
Admin Team`
                    : ""
                }
              />
            </div>

            <div style={{ textAlign: "right", marginBottom: 0 }}>
              <Space>
                <Button onClick={() => setEmailVisible(false)}>Cancel</Button>
                <Button
                  type="primary"
                  loading={loading}
                  icon={<SendOutlined />}
                  onClick={() => handleEmailSubmit()}
                  style={{
                    backgroundColor: "#ea580c",
                    borderColor: "#ea580c",
                  }}
                >
                  Send Email
                </Button>
              </Space>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SendReport;
