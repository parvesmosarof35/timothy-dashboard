import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Edit, InfoIcon, Trash2 } from "lucide-react";
import { Table, Input, Button, Pagination, Modal, Spin, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAdmins } from "../../../redux/features/admin/adminSlice";
import AddAdminModal from "./AddAdminModal";
import AdminProfile from "../components/AdminProfile";

const Role = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  7;
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { admins, loading, meta, error } = useSelector((state) => ({
    admins: state.admin.admins?.data || [],
    meta: state.admin.admins?.meta || { total: 0 },
    loading: state.admin.loading,
    error: state.admin.error,
  }));

  useEffect(() => {
    dispatch(getAdmins({ page: currentPage, limit: 10 }));
  }, [dispatch, currentPage]);

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this admin?",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        console.log("Deleted Admin ID:", id);
        // TODO: Add delete logic (e.g., dispatch(deleteAdmin(id)))
      },
    });
  };

  const columns = [
    {
      title: "S.ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            role === "ADMIN"
              ? "text-green-700 bg-green-100"
              : "text-blue-700 bg-blue-100"
          }`}
        >
          {role}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, admin) => (
        <div className="flex gap-4">
          <button onClick={() => handleDelete(admin.id)}>
            <Trash2 className="text-red-500" />
          </button>
          <button onClick={() => navigate(`view/${admin.id}`)}>
            <Edit className="text-gray-700" />
          </button>
          <button onClick={() => navigate(`details/${admin.id}`)}>
            <InfoIcon className="text-gray-700" />
          </button>
        </div>
      ),
    },
  ];

  const handleRefetchAdmins = () => {
    dispatch(getAdmins({ page: currentPage, limit: 10 }));
  };

  return (
    <div className="px-0 md:px-6 mx-auto font-sans">
      <AdminProfile headingText="Manage Roles" />

      <div className="flex justify-between items-center mb-6 mt-6">
        <h2 className="text-2xl font-semibold text-darkGray">Manage Admins</h2>

        <div className="flex flex-wrap gap-3">
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 200 }}
          />
          <Button
            type="primary"
            icon={<Plus />}
            className="bg-orangePrimary text-black"
            onClick={() => setShowModal(true)}
          >
            Add New Admin
          </Button>
        </div>
      </div>

      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          className="mb-4"
        />
      )}

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Spin tip="Loading admins..." />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={admins}
          pagination={false}
          rowKey="id"
        />
      )}

      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          total={meta.total}
          pageSize={10}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>

      <AddAdminModal
        refetchAdmins={handleRefetchAdmins}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Role;
