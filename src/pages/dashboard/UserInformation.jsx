import { useState } from "react";
import { useSelector } from "react-redux";
import AdminProfile from "./components/AdminProfile";
import UsersTable from "./components/UsersTable";
import ServiceProvider from "./ServiceProviders/ServiceProvider";

export default function UserInformation() {
  const [activeTab, setActiveTab] = useState("PARTNER"); // PARTNER | USERS
  const [searchTerm, setSearchTerm] = useState("");

  const { users } = useSelector((state) => state.getAllUsers);
  const { users: partners } = useSelector((state) => state.getAllPartners);

  const partnerSuggestions = Array.isArray(partners?.data)
    ? partners.data.map((p) => ({
        id: p.id,
        title: p.fullName || "N/A",
        subtitle: p.email || "-",
        avatar: p.profileImage,
        link: `/dashboard/service-provider/details/${p.id}`,
      }))
    : [];

  const userSuggestions = Array.isArray(users?.data)
    ? users.data.map((u) => ({
        id: u.id,
        title: u.fullName || "N/A",
        subtitle: u.email || "-",
        avatar: u.profileImage,
        link: `/dashboard/user-info/details/${u.id}`,
      }))
    : [];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm("");
  };

  return (
    <div className=" bg-grayLightBg min-h-screen md:px-6 px-0">
      <AdminProfile 
        headingText="Users Management" 
        searchValue={searchTerm} 
        onSearchChange={setSearchTerm} 
        showSearch={true} 
        suggestions={activeTab === "PARTNER" ? partnerSuggestions : userSuggestions}
      />

      {/* Tabs */}
      <div className="rounded-t-md ">
        <div className="flex gap-8 px-4 pt-4">
          <button
            className={`text-lg font-semibold ${
              activeTab === "PARTNER" ? "text-orangePrimary" : "text-brandGray"
            }`}
            onClick={() => handleTabChange("PARTNER")}
          >
            Partner
          </button>
          <button
            className={`text-lg font-semibold ${
              activeTab === "USERS" ? "text-orangePrimary" : "text-brandGray"
            }`}
            onClick={() => handleTabChange("USERS")}
          >
            Users
          </button>
        </div>
        {/* Underline indicator */}
        <div className="relative h-6 mt-1">
          <div className="absolute left-4 right-4 top-5 h-[2px] w-1/2 max-w-[12rem] bg-[#edd8bf]" />
          <div
            className={`absolute top-5 h-[3px] bg-orangePrimary rounded transition-all duration-300 ${
              activeTab === "PARTNER" ? "left-4 w-24" : "left-32 w-20"
            }`}
          />
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {activeTab === "PARTNER" ? (
          <ServiceProvider hideHeader embedded searchTerm={searchTerm} />
        ) : (
          <UsersTable searchTerm={searchTerm} />
        )}
      </div>
    </div>
  );
}
