import React from "react";
// import OverviewCard from "./dashboard/OverviewCard";
// import PaymentChart from "@/components/dashboard/PaymentChart";
// import PendingVerification from "@/components/dashboard/PendingVerification";
// import CommunicationSupport from "@/components/dashboard/CommunicationSupport";
// import UserSupportTickets from "@/components/dashboard/UserSupportTickets";

import OverviewCard from "./Dashboard/OverviewCard";
import PaymentChart from "./Dashboard/PaymentChart";
import PendingVerification from "./Dashboard/PendingVerification";
import CommunicationSupport from "./dashboard/CommunicationSupport";
import UserSupportTickets from "./dashboard/UserSupportTickets";
import UserAnalytics from "./dashboard/UserAnalytics";
import RevenueChart from "./dashboard/RevinueChart";
import FinancialDashboard from "./dashboard/RevinueChart";
import CancellationRefunds from "./dashboard/CancellationRefunds";
import ContractManagement from "./dashboard/CircularProgress";

const Dashboard = () => {
  return (
    <div className="px-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-2xl font-semibold mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 mb-6">
        <div className="col-span-1 md:col-span-6 rounded-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <OverviewCard title="Total Users" value="2,420" trend="↑ 20%" />
            <OverviewCard title="Total Service Providers" value="2,420" trend="↑ 20%" />
            <OverviewCard title="Active Contracts" value="1,209" trend="↓ 5%" />
          </div>

       {/* payment and verification section */}
          <div className="w-full grid grid-cols-6 gap-6">
            <PaymentChart />
            <div className="h-full rounded-lg col-span-2">
              <PendingVerification />
            </div>
          </div>

<UserAnalytics></UserAnalytics>

  <FinancialDashboard></FinancialDashboard>

  <CancellationRefunds></CancellationRefunds>

  <ContractManagement></ContractManagement>
        </div>

        <div className="col-span-1 md:col-span-4 bg-white rounded-lg p-4 shadow-sm space-y-6">
          <CommunicationSupport />

          <UserSupportTickets />

        
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
      </div>
    </div>
  );
};

export default Dashboard;
