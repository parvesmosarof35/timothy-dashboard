import React, { useState } from "react";
import {
  Search,
  Plus,
  Trash2,
  X,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AdminProfile from "../components/AdminProfile";
import Swal from "sweetalert2";
// import { Tabs } from 'antd';
// import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';


const Role = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "admin",
  });
  const currentPage = 2;
  const totalPages = 12;

  // Sample admin data
  const [admins, setAdmins] = useState([
    {
      id: "#12345",
      name: "Ahmed Osman",
      email: "socialahoy@gmail.com",
      userType: "Admin",
    },
    {
      id: "#12346",
      name: "Raj",
      email: "socialahoy@gmail.com",
      userType: "Admin",
    },
    {
      id: "#12347",
      name: "Sarah Johnson",
      email: "sarah.j@gmail.com",
      userType: "SuperAdmin",
    },
    {
      id: "#12348",
      name: "Mike Chen",
      email: "mike.chen@gmail.com",
      userType: "Users",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);

    // Add new admin to list
    const newAdmin = {
      id: `#${Math.floor(Math.random() * 100000)}`,
      name: formData.name,
      email: formData.email,
      userType:
        formData.userType.charAt(0).toUpperCase() + formData.userType.slice(1),
    };

    setAdmins((prev) => [...prev, newAdmin]);

    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      password: "",
      userType: "admin",
    });
    setShowModal(false);
  };

  //   const handleDelete = async (adminId) => {

  const handleDelete = (adminId) => {
    Swal.fire({
      title: "Are you sure to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete user",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        //  await axios.delete(`/api/admins/${adminId}`);
        console.log(adminId);
        setAdmins((prev) => prev.filter((admin) => admin.id !== adminId));
        Swal.fire(
          "User deleted!",
          "User has been deleted successfully.",
          "success"
        );
      }
    });
  };

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.userType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getUserTypeColor = (userType) => {
    switch (userType.toLowerCase()) {
      case "admin":
        return "text-brandGreen bg-green-50";
      case "superadmin":
        return "text-brandBlue bg-blueLightBg";
      case "users":
        return "text-brandGray bg-grayLightBg";
      default:
        return "text-brandGray bg-grayLightBg";
    }
  };

  return (
    <div className="px-6 mx-auto font-sans">
      <AdminProfile headingText="Manage Roles"></AdminProfile>

      <div className="mt-6  mx-auto bg-grayLightBg min-h-screen">
        {/* Header */}
        <div className="bg-white pt-6 rounded-lg shadow-sm px-6 mb-6">
          <h1 className="text-2xl font-bold text-darkGray mb-6">All Admin</h1>


          
{/* <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        key: id,
        label: `Tab ${id}`,
        children: <div>asdf {id}</div>,
        icon: <Icon />,
      };
    })}
  /> */}


          {/* Search and Add Button */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brandGray w-5 h-5" />
              <input
                type="text"
                placeholder="Search Admins"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border text-brandGray rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="ml-4 bg-orangePrimary hover:bg-yellow-500  px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add New Admin
            </button>
          </div>

          {/* Admin Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-darkGray">
                    S.ID
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-darkGray">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-darkGray">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-darkGray">
                    User Type
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-darkGray">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmins.map((admin) => (
                  <tr
                    key={admin.id}
                    className="border-b border-gray-100 hover:bg-grayLightBg"
                  >
                    <td className="py-3 px-4 text-brandGray">{admin.id}</td>
                    <td className="py-3 px-4 text-darkGray">{admin.name}</td>
                    <td className="py-3 px-4 text-brandGray">{admin.email}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getUserTypeColor(
                          admin.userType
                        )}`}
                      >
                        {admin.userType}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDelete(admin.id)}
                        className="text-brandRed hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-darkGray hover:bg-grayLightBg rounded-lg">
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
              </div>

              <div className="text-sm text-darkGray">
                Page {currentPage} of {totalPages}
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-darkGray hover:bg-grayLightBg rounded-lg">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-darkGray">Make Admin</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-brandGray hover:text-brandGray"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-darkGray mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Type Here"
                    className="w-full px-3 py-2 border text-brandGray rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkGray mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Type Here"
                    className="w-full px-3 py-2 border text-brandGray rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkGray mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••••••"
                      className="w-full px-3 py-2 pr-10 border text-brandGray rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brandGray hover:text-brandGray"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkGray mb-1">
                    User Type
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border text-brandGray rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">SuperAdmin</option>
                    <option value="users">Users</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-orangePrimary hover:bg-yellow-500 py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Role;
