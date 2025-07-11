import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowTrendingDown } from "react-icons/hi2";
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

const UserAnalytics = ({
  chartData = [],
  peakValue = 200.3,
  partnersCount = 1009123,
  usersCount = 1009123,
  title = "User Analytics",
  subtitle = "User Growth",
}) => {
  const defaultData = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 45 },
    { name: "May", value: 180 },
    { name: "Jun", value: 200 },
    { name: "Jul", value: 190 },
    { name: "Aug", value: 160 },
    { name: "Sep", value: 140 },
    { name: "Oct", value: 120 },
    { name: "Nov", value: 100 },
    { name: "Dec", value: 85 },
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

  return (
    <div>
      <h3 className="text-2xl mb-6 font-semibold text-darkGray">{title}</h3>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-6">
          <h3 className="text-lg font-semibold text-brandGray">{subtitle}</h3>
          <div className="flex items-center text-xs text-brandGray bg-grayLightBg px-3 py-1.5 rounded-full border">
            Today <IoIosArrowDown className="ml-1 text-brandGray" size={12} />
          </div>
        </div>

        {/* Main Section Divided */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center px-6 py-6 gap-8">
          {/* Chart Section - 86% */}
          <div className="flex-[0.86] h-56 md:h-60">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#FFA500" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#FFA500"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Gray Divider */}
          <div className="hidden md:block w-px h-60 bg-gray-300" />

          {/* Stats Section - 14% */}
          <div className="flex-[0.14] flex flex-col justify-center space-y-6">
            {/* Partners */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <LuUsers  className="w-6 h-6 text-[#c3720b] " />
              </div>
              <div>
                <p className="text-xs text-brandGray">Partners</p>
                <p className="text-sm font-bold text-darkGray">
                  {partnersCount.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Users */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <LuUsers className="w-6 h-6 text-orangePrimary" />
              </div>
              <div>
                <p className="text-xs text-brandGray">Users</p>
                <p className="text-sm font-bold text-darkGray">
                  {usersCount.toLocaleString()}
                </p>
              </div>
            </div>
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
