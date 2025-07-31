import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Select, message, Spin, Modal, Card, Descriptions, Avatar } from 'antd';
import { 
  UserOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  HomeOutlined, 
  CalendarOutlined,
  ExclamationCircleOutlined 
} from '@ant-design/icons';
import dayjs from 'dayjs';

const RoleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
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

  const showUpdateConfirm = (values) => {
    Modal.confirm({
      title: 'Confirm Update',
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          <p>Are you sure you want to update this partner's details?</p>
          <Card bordered={false} style={{ marginTop: 16 }}>
            <Descriptions column={1}>
              <Descriptions.Item label="Name">{values.name}</Descriptions.Item>
              <Descriptions.Item label="Email">{values.email}</Descriptions.Item>
              <Descriptions.Item label="Role">{values.role}</Descriptions.Item>
              <Descriptions.Item label="Phone">{values.phone}</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      ),
      okText: 'Yes, Update',
      cancelText: 'Cancel',
      onOk: () => handleUpdate(values),
    });
  };

  const handleUpdate = async (values) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      message.success({
        content: 'Partner details updated successfully!',
        duration: 3,
      });
      
      // Update local state
      setPartner(prev => ({ ...prev, ...values }));
    } catch (error) {
      message.error('Failed to update partner details');
    } finally {
      setLoading(false);
    }
  };

  const showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Delete Partner',
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          <p>Are you sure you want to delete this partner?</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
            <Avatar src={partner.avatar} size={64} />
            <div style={{ marginLeft: 16 }}>
              <p><strong>{partner.name}</strong></p>
              <p>{partner.email}</p>
              <p>{partner.role}</p>
            </div>
          </div>
        </div>
      ),
      okText: 'Yes, Delete',
      cancelText: 'Cancel',
      okButtonProps: { danger: true },
      onOk: handleDelete,
    });
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      message.success({
        content: 'Partner deleted successfully!',
        duration: 3,
      });
      
    //   setTimeout(() => {
    //     navigate('/partners'); // Redirect to partners list after 3 seconds
    //   }, 3000);
    } catch (error) {
      message.error('Failed to delete partner');
      setLoading(false);
    }
  };

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
        onClick={() => navigate(-1)} 
        style={{ marginBottom: 16 }}
      >
        ← Back to  Admins
      </Button>

      <Card
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={partner.avatar} size={40} style={{ marginRight: 12 }} />
            <span>Edit Partner: {partner.name}</span>
          </div>
        }
        bordered={false}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            ...partner,
            birthDate: dayjs(partner.birthDate),
            startDate: dayjs(partner.startDate)
          }}
          onFinish={showUpdateConfirm}
        >
          <Form.Item 
            label="Name" 
            name="name" 
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item 
            label="Email" 
            name="email" 
            className='cursor-not-allowed'
            rules={[
              {  message: 'Please input the email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input readOnly prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item 
            label="Role" 
            name="role" 
            rules={[{ required: true, message: 'Please select the role!' }]}
          >
            <Select>
              <Select.Option value="ADMIN">Admin</Select.Option>
              {/* <Select.Option value="manager">SuperAdmin</Select.Option> */}
            </Select>
          </Form.Item>

          <Form.Item 
            label="Phone" 
            name="phone" 
            rules={[{ required: true, message: 'Please input the phone number!' }]}
          >
            <Input prefix={<PhoneOutlined />} />
          </Form.Item>

          <Form.Item 
            label="Address" 
            name="address" 
            rules={[{ required: true, message: 'Please input the address!' }]}
          >
            <Input.TextArea rows={3} prefix={<HomeOutlined />} />
          </Form.Item>

          <Form.Item 
            label="Birth Date" 
            name="birthDate" 
            rules={[{ required: true, message: 'Please select the birth date!' }]}
          >
            <DatePicker 
              format="YYYY-MM-DD" 
              style={{ width: '100%' }} 
              suffixIcon={<CalendarOutlined />} 
            />
          </Form.Item>

          <Form.Item 
            label="Start Date" 
            name="startDate" 
            rules={[{ required: true, message: 'Please select the start date!' }]}
          >
            <DatePicker 
              format="YYYY-MM-DD" 
              style={{ width: '100%' }} 
              suffixIcon={<CalendarOutlined />} 
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 32 }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              style={{ marginRight: 16 }}
            >
              Update Partner
            </Button>
            <Button 
              danger 
              onClick={showDeleteConfirm}
              loading={loading}
            >
              Delete Partner
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RoleDetails;