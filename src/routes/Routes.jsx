import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../components/NotFound";
import ForgotPass from "../components/ForgotPass";
import Checkemail from "../components/Checkemail";
import ResetPassword from "../components/ResetPassword";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardLayout from "../layouts/DashboardLayout";
import UserInformation from "../pages/dashboard/UserInformation";
import Subscription from "../pages/dashboard/Subscription";
import ProfileSettings from "../components/ProfileSetting";
import TermsPage from "../pages/dashboard/TermsPage";
import Privacypage from "../pages/dashboard/Privacypage";
import Register from "../pages/Register/Register"
import FinancialPayments from "../pages/dashboard/FinancialPayments/FinancialPayments";
import Contracts from "../pages/dashboard/Contracts/Contracts";
import UserSupport from "../pages/dashboard/userSupport/userSupport";
import ContractDetails from "../pages/dashboard/ContractDetails";
import UserMessage from "../pages/dashboard/userSupport/UserMessage";
import ServiceProvider from "../pages/dashboard/ServiceProviders/ServiceProvider";
import Role from "../pages/dashboard/Role/Role";
import UserDetails from "../pages/dashboard/UserDetails";
import SettingsTab from "../pages/dashboard/SettingsTab/SettingsTabs";
import AprouvePartners from "../pages/dashboard/ApprovePartners/AprouvePartners";
import SendReport from "../pages/SendReport/SendReport";
import Notification from "../pages/dashboard/Notification/notification";
import NewContractDetails from "../pages/dashboard/NewcontractDetails/NewContractDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <DashboardHome /> },
    ]
  },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element:  <Register></Register> },
  { path: '/forgotpass', element: <ForgotPass /> },
  { path: '/checkemail', element: <Checkemail /> },
  { path: '/reset-password', element: <ResetPassword /> },

  // Dashboard routes
{
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    { path: 'statistics', element: <DashboardHome /> },
    { path: 'user-info', element: <UserInformation /> },
    { path: 'user-info/details/:id', element: <UserDetails></UserDetails> },
    { path: 'service-provider', element: <ServiceProvider></ServiceProvider> },
    { path: 'approve-partners', element: <AprouvePartners></AprouvePartners> },
    { path: 'service-provider/details/:id', element: <UserDetails></UserDetails> },
    { path: 'financialpayments', element: <FinancialPayments /> },
    { path: 'contracts', element: <Contracts /> },
    { path: `contracts/:id`, element: <NewContractDetails></NewContractDetails> },
    // { path: 'userroles', element: <div>user roles</div> },
    { path: 'support', element: <UserSupport></UserSupport> },
    { path: 'support/:id', element: <UserMessage></UserMessage> },
    { path: 'role', element: <Role></Role> },
    { path: 'settings', element: <SettingsTab></SettingsTab> },
    { path: 'send-report', element: <SendReport></SendReport> },
    { path: 'notification', element: <Notification></Notification> },
  //   { path: 'settings/terms', element: <TermsPage /> },
  //   { path: 'settings/privacy', element: <Privacypage /> },
   ]
}
]);

export default router;