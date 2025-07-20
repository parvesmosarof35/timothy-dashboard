// FinancialPaymentDetails.tsx
import { useParams } from "react-router-dom";
import { Card, Row, Col, Typography, Descriptions, Divider } from "antd";

const { Title, Text } = Typography;

const fakeData = {
  id: "1981849262",
  description: "Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.",
  paymentType: "Incoming",
  date: "12 Dec 2023",
  user: "John Doe",
  partner: "Sureman",
  orderId: "84984948494",
  status: "Active",
  amount: "$260",
  partnerEmail: "partner@sureman.com",
  partnerPhone: "+880123456789",
  businessId: "BIZ-849384",
  address: "123 Business Ave, Dhaka, Bangladesh"
};

const FinancialPaymentDetails = () => {
  const { id } = useParams();

  // In real case, fetch data from API using `id`

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Payment Details</Title>
      <Text type="secondary">Transaction ID: {id}</Text>

      <Divider />

      <Row gutter={[16, 16]}>
        {/* Payment Summary */}
        <Col xs={24} md={12}>
          <Card title="Payment Info" bordered={false}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Order ID">{fakeData.orderId}</Descriptions.Item>
              <Descriptions.Item label="Date">{fakeData.date}</Descriptions.Item>
              <Descriptions.Item label="Payment Type">{fakeData.paymentType}</Descriptions.Item>
              <Descriptions.Item label="Status">{fakeData.status}</Descriptions.Item>
              <Descriptions.Item label="Amount">{fakeData.amount}</Descriptions.Item>
              <Descriptions.Item label="Description">{fakeData.description}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        {/* User & Partner Info */}
        <Col xs={24} md={12}>
          <Card title="User & Partner Info" bordered={false}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="User">{fakeData.user}</Descriptions.Item>
              <Descriptions.Item label="Partner">{fakeData.partner}</Descriptions.Item>
              <Descriptions.Item label="Partner Email">{fakeData.partnerEmail}</Descriptions.Item>
              <Descriptions.Item label="Phone">{fakeData.partnerPhone}</Descriptions.Item>
              <Descriptions.Item label="Business ID">{fakeData.businessId}</Descriptions.Item>
              <Descriptions.Item label="Address">{fakeData.address}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FinancialPaymentDetails;
