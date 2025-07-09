import AdminProfile from "./components/AdminProfile";
import UsersTable from "./components/UsersTable";

export default function UserInformation() {
  return (
    <div className=" bg-gray-50 min-h-screen px-6">
      <AdminProfile headingText="Users Management" />
      <UsersTable />
    </div>
  );
}
