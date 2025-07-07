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
    { path: 'financialpayments', element: <FinancialPayments /> },
    { path: 'contracts', element: <Contracts /> },
    { path: `contracts/:id`, element: <ContractDetails /> },
    // { path: 'userroles', element: <div>user roles</div> },
    { path: 'support', element: <UserSupport></UserSupport> },
    { path: 'support/:id', element: <UserMessage></UserMessage> },
    { path: 'settings', element: <ProfileSettings /> },
  //   { path: 'settings/terms', element: <TermsPage /> },
  //   { path: 'settings/privacy', element: <Privacypage /> },
   ]
}
]);

export default router;