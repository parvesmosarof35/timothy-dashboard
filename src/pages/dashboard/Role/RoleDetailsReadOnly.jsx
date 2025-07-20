import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Descriptions, Button, Spin, Avatar } from 'antd';
import { 
  UserOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  HomeOutlined, 
  CalendarOutlined,
  ArrowLeftOutlined,
  IdcardOutlined,
  CrownOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';

const RoleDetailsReadOnly = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [partner, setPartner] = useState(null);

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchPartnerDetails = () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setPartner({
          id: id,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "manager",
          phone: "+1 234 567 890",
          address: "123 Main St, New York, NY 10001",
          birthDate: "1985-05-15",
          startDate: "2020-01-10",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        });
        setLoading(false);
      }, 800);
    };

    fetchPartnerDetails();
  }, [id]);

  if (loading && !partner) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <Button 
        type="text" 
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)} 
        style={{ marginBottom: 16 }}
      >
        Back
      </Button>

      <Card
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={partner.avatar} size={40} style={{ marginRight: 12 }} />
            <span>Partner Details: {partner.name}</span>
          </div>
        }
        bordered={false}
      >
        <Descriptions bordered column={1}>
          <Descriptions.Item label={<><IdcardOutlined /> ID</>}>
            {partner.id}
          </Descriptions.Item>
          <Descriptions.Item label={<><UserOutlined /> Name</>}>
            {partner.name}
          </Descriptions.Item>
          <Descriptions.Item label={<><MailOutlined /> Email</>}>
            {partner.email}
          </Descriptions.Item>
          <Descriptions.Item label={<><CrownOutlined /> Role</>}>
            {partner.role.charAt(0).toUpperCase() + partner.role.slice(1)}
          </Descriptions.Item>
          <Descriptions.Item label={<><PhoneOutlined /> Phone</>}>
            {partner.phone}
          </Descriptions.Item>
          <Descriptions.Item label={<><HomeOutlined /> Address</>}>
            {partner.address}
          </Descriptions.Item>
          <Descriptions.Item label={<><CalendarOutlined /> Birth Date</>}>
            {dayjs(partner.birthDate).format('MMMM D, YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label={<><CalendarOutlined /> Start Date</>}>
            {dayjs(partner.startDate).format('MMMM D, YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label={<><CalendarOutlined /> Years with Company</>}>
            {dayjs().diff(partner.startDate, 'year')} years
          </Descriptions.Item>
        </Descriptions>

        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <Button 
            type="primary" 
            onClick={() => navigate(`/dashboard/role/details/${id}`)}
            style={{ marginRight: 16 }}
          >
            Edit Partner
          </Button>
          <Button onClick={() => navigate(-1)}>
            Return to List
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default RoleDetailsReadOnly;