import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { LuUsers } from "react-icons/lu";
import { useState } from "react";


const UserAnalytics = ({
  chartData = [],
  peakValue = 200.3,
  partnersCount = 1009123,
  usersCount = 1009123,
  title = "User Analytics",
  subtitle = "User Growth",
}) => {
  const defaultData = [
    { name: "Jan", users: 10, partners: 8 },
    { name: "Feb", users: 20, partners: 15 },
    { name: "Mar", users: 35, partners: 25 },
    { name: "Apr", users: 45, partners: 35 },
    { name: "May", users: 180, partners: 140 },
    { name: "Jun", users: 200, partners: 160 },
    { name: "Jul", users: 190, partners: 150 },
    { name: "Aug", users: 160, partners: 130 },
    { name: "Sep", users: 140, partners: 110 },
    { name: "Oct", users: 120, partners: 95 },
    { name: "Nov", users: 100, partners: 80 },
    { name: "Dec", users: 85, partners: 70 },
  ];

  const data = chartData.length > 0 ? chartData : defaultData;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-lg rounded border text-sm">
          <p className="font-medium">{`${label}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };



  const [selectedPartner, setSelectedPartner] = useState("Today");
  const [isOpenPartner, setIsOpenPartner] = useState(false);

  // dropdown 
  const options = ["Today", "This Week", "This Month", "This Year"];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Today");
  
  const handleSelectPartner = (option) => {
    setSelectedPartner(option);
    console.log("Selected:", option);
    setIsOpenPartner(false);
  }; 


    const handleSelect = (option) => {
    setSelected(option);
    console.log("Selected:", option);
    setIsOpen(false);
  }; 



  return (
    <div>
      <h3 className="text-2xl mb-6 font-semibold text-gray-800">{title}</h3>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Users Box */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-6 pt-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                <LuUsers className="w-5 h-5 text-[#ffc983]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Users</h3>
                <p className="text-sm text-gray-500">Growth Analytics</p>
              </div>
            </div>


            {/* dropdown  */}

            <div className="relative inline-block text-left">
      {/* Trigger */}
      <div
        onClick={() => setIsOpenPartner(!isOpenPartner)}
        className="flex items-center text-xs text-brandGray bg-grayLightBg px-3 py-1.5 rounded-full border cursor-pointer"
      >
        {selectedPartner}
        <IoIosArrowDown className="ml-1 text-brandGray" size={12} />
      </div>

      {/* Dropdown Options */}
      {isOpenPartner && (
        <div className="absolute z-10 mt-1 w-36 bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelectPartner(option)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
          </div>

          {/* Stats */}
          <div className="px-6 py-4">
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold text-gray-800">
                {usersCount.toLocaleString()}
              </p>
              <div className="flex items-center text-green-600 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>12.5%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Total active users</p>
          </div>

          {/* Chart */}
          <div className="h-48 px-6 pb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="userGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#ffc983" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ffc983" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                  width={40}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#ffc983"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#userGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Partners Box */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-6 pt-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                <LuUsers className="w-5 h-5 text-[#c3720b]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Partners</h3>
                <p className="text-sm text-gray-500">Growth Analytics</p>
              </div>
            </div>


            {/* Dropdown  */}

<div className="relative inline-block text-left">
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-xs text-brandGray bg-grayLightBg px-3 py-1.5 rounded-full border cursor-pointer"
      >
        {selected}
        <IoIosArrowDown className="ml-1 text-brandGray" size={12} />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-36 bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>


          </div>

          {/* Stats */}
          <div className="px-6 py-4">
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold text-gray-800">
                {partnersCount.toLocaleString()}
              </p>
              <div className="flex items-center text-green-600 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>8.2%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Total active partners</p>
          </div>

          {/* Chart */}
          <div className="h-48 px-6 pb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="partnerGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#c3720b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#c3720b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                  width={40}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="partners"
                  stroke="#c3720b"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#partnerGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

UserAnalytics.defaultProps = {
  chartData: [],
  peakValue: 200.3,
  partnersCount: 1009123,
  usersCount: 1009123,
  title: "User Analytics",
  subtitle: "User Growth",
};

export default UserAnalytics;