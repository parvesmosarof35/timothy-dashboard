import AdminProfile from "./components/AdminProfile";
import Subscriber from "./components/Subscriber";

export default function Subscription() {
  return (
    <div className="space-y-6 bg-grayLightBg min-h-screen p-6">
      <AdminProfile />
      <Subscriber />
    </div>
  );
}
