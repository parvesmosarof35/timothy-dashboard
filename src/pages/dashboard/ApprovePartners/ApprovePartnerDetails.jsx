import { useParams, useNavigate } from "react-router-dom";
import { Card, Descriptions, Button, message, Row, Col, Avatar, Modal } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  ShopOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  IdcardOutlined,
  ArrowLeftOutlined
} from "@ant-design/icons";
import dayjs from "dayjs";

const ApprovePartnerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [modal, modalContextHolder] = Modal.useModal();
  
  // Mock data - replace with actual API call
  const partnerDetails = {
    id: id,
    registrationNumber: "REG-123456",
    companyName: "Grand Hotel",
    businessType: "Hotel",
    address: "123 Main Street, Cityville",
    ownerName: "John Doe",
    phone: "+1 234 567 890",
    email: "john.doe@grandhotel.com",
    requestDate: "2023-05-15T10:30:00Z",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const showApproveConfirm = () => {
    modal.confirm({
      title: 'Confirm Approval',
      content: (
        <div>
          <p>Are you sure you want to approve this partner?</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
            <Avatar src={partnerDetails.avatar} size={64} />
            <div style={{ marginLeft: 16 }}>
              <p><strong>{partnerDetails.ownerName}</strong></p>
              <p>{partnerDetails.email}</p>
            </div>
          </div>
        </div>
      ),
      okText: 'Yes, Approve',
      cancelText: 'Cancel',
      onOk: handleApprove,
    });
  };

  const showRejectConfirm = () => {
    modal.confirm({
      title: 'Confirm Rejection',
      content: (
        <div>
          <p>Are you sure you want to reject this partner?</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
            <Avatar src={partnerDetails.avatar} size={64} />
            <div style={{ marginLeft: 16 }}>
              <p><strong>{partnerDetails.ownerName}</strong></p>
              <p>{partnerDetails.email}</p>
            </div>
          </div>
        </div>
      ),
      okText: 'Yes, Reject',
      cancelText: 'Cancel',
      okButtonProps: { danger: true },
      onOk: handleReject,
    });
  };

  const handleApprove = () => {
    return new Promise((resolve) => {
      // Add your approval logic here (API call)
      console.log(`Approving partner with ID: ${id}`);
      
      messageApi.success({
        content: `${partnerDetails.ownerName}'s request has been approved!`,
        duration: 3,
      });
      
      setTimeout(() => {
        navigate(-1); // Go back after 3 seconds
        resolve();
      }, 3000);
    });
  };

  const handleReject = () => {
    return new Promise((resolve) => {
      // Add your rejection logic here (API call)
      console.log(`Rejecting partner with ID: ${id}`);
      
      messageApi.error({
        content: `${partnerDetails.ownerName}'s request has been rejected.`,
        duration: 3,
      });
      
      setTimeout(() => {
        navigate(-1); // Go back after 3 seconds
        resolve();
      }, 3000);
    });
  };

  return (
    <div style={{ padding: "24px" }}>
      {contextHolder}
      {modalContextHolder}
      
      <Button 
        type="text" 
        icon={<ArrowLeftOutlined />} 
        onClick={handleGoBack}
        style={{ marginBottom: 16 }}
      >
        Back to List
      </Button>
      
      <Card
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={partnerDetails.avatar} size={40} style={{ marginRight: 12 }} />
            <span>Partner Approval Details</span>
          </div>
        }
        bordered={false}
        style={{ width: "100%" }}
      >
        <Descriptions bordered column={1}>
          <Descriptions.Item label={<><IdcardOutlined /> ID</>}>
            {partnerDetails.id}
          </Descriptions.Item>
          <Descriptions.Item label={<><IdcardOutlined /> Registration Number</>}>
            {partnerDetails.registrationNumber}
          </Descriptions.Item>
          <Descriptions.Item label={<><ShopOutlined /> Company Name</>}>
            {partnerDetails.companyName}
          </Descriptions.Item>
          <Descriptions.Item label={<><ShopOutlined /> Business Type</>}>
            {partnerDetails.businessType}
          </Descriptions.Item>
          <Descriptions.Item label={<><ShopOutlined /> Address</>}>
            {partnerDetails.address}
          </Descriptions.Item>
          <Descriptions.Item label={<><UserOutlined /> Owner</>}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={partnerDetails.avatar} size={24} style={{ marginRight: 8 }} />
              {partnerDetails.ownerName}
            </div>
          </Descriptions.Item>
          <Descriptions.Item label={<><PhoneOutlined /> Phone</>}>
            {partnerDetails.phone}
          </Descriptions.Item>
          <Descriptions.Item label={<><MailOutlined /> Email</>}>
            {partnerDetails.email}
          </Descriptions.Item>
          <Descriptions.Item label={<><CalendarOutlined /> Request Date</>}>
            {dayjs(partnerDetails.requestDate).format("DD MMM YYYY, hh:mm A")}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <span style={{ color: partnerDetails.status === "Pending" ? "orange" : 
                          partnerDetails.status === "Approved" ? "green" : "red" }}>
              {partnerDetails.status}
            </span>
          </Descriptions.Item>
        </Descriptions>

        <Row justify="center" gutter={16} style={{ marginTop: "24px" }}>
          <Col>
            <Button
              type="primary"
              icon={<CheckOutlined />}
              size="large"
              onClick={showApproveConfirm}
              style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
            >
              Approve
            </Button>
          </Col>
          <Col>
            <Button
              danger
              icon={<CloseOutlined />}
              size="large"
              onClick={showRejectConfirm}
            >
              Reject
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ApprovePartnerDetails;