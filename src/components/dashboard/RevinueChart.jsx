import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown, ChevronDown } from "lucide-react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  { name: "Jan", partners: 28, users: 10 },
  { name: "Feb", partners: 36, users: 22 },
  { name: "Mar", partners: 32, users: 24 },
  { name: "Apr", partners: 30, users: 15 },
  { name: "May", partners: 38, users: 18 },
  { name: "Jun", partners: 49, users: 39 },
  { name: "Jul", partners: 39, users: 50 },
  { name: "Aug", partners: 26, users: 48 },
  { name: "Sep", partners: 14, users: 38 },
  { name: "Oct", partners: 27, users: 44 },
  { name: "Nov", partners: 29, users: 32 },
  { name: "Dec", partners: 48, users: 30 },
];

const MetricCard = ({ title, value, trend, icon: Icon, trendColor }) => (
  <div className="bg-white flex-row-reverse p-6 rounded-lg flex items-center justify-start gap-2">
    <div>
      <p className="text-brandGray text-sm font-medium mb-1">{title}</p>
      <p className="text-lg font-semibold text-darkGray">
        {value.toLocaleString()}
      </p>
    </div>
    <div
      className={`p-2 rounded-lg border-2 border-[#f4ece1]`}
    >
      <Icon
        className={`w-10 h-10 ${
          trendColor === "green" ? "text-brandGreen" : "text-red-600"
        }`}
      />
    </div>
  </div>
);

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div
      className={`w-3 h-3 rounded-full`}
      style={{ backgroundColor: color }}
    ></div>
    <span className="text-brandGray text-sm font-medium">{label}</span>
  </div>
);





const FinancialDashboard = () => {


  
// dropdown 
  const options = ["Today", "This Week", "This Month", "This Year"];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Today");

  const handleSelect = (option) => {
    setSelected(option);
    console.log("Selected:", option);
    setIsOpen(false);
  };


  return (
    <div className=" bg-grayLightBg">
      <h1 className="text-3xl font-semibold text-darkGray mb-6">
        Financial Metrics
      </h1>

      {/* Chart Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        {/* Chart Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-brandGray">
            Revenue Overview
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <LegendItem color="#c3720b" label="Partners" />
              <LegendItem color="#FFC983" label="Users" />
            </div>


            {/* dropdown  */}

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
        </div>

        {/* Metric Cards */}
        <div className="flex mb-8 justify-start">
          <MetricCard
            title="Admin"
            value={1009123}
            trend="up"
            icon={TrendingUp}
            trendColor="green"
          />
          <MetricCard
            title="Partners"
            value={1009123}
            trend="up"
            icon={TrendingUp}
            trendColor="green"
          />
          {/* <MetricCard
            title="Users"
            value={1009123}
            trend="down"
            icon={TrendingDown}
            trendColor="red"
          /> */}
        </div>

        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid
                stroke="#f3f4f6"
                strokeDasharray="none"
                vertical={false}
                horizontal={true}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickFormatter={(value) => `${value}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                labelStyle={{ color: "#374151", fontWeight: "600" }}
              />
              <Line
                type="monotone"
                dataKey="partners"
                stroke="#c3720b"
                strokeWidth={3}
                dot={{ fill: "#c3720b", strokeWidth: 0, r: 4 }}
                activeDot={{
                  r: 6,
                  stroke: "#c3720b",
                  strokeWidth: 2,
                  fill: "white",
                }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#FFC983"
                strokeWidth={3}
                dot={{ fill: "#FFC983", strokeWidth: 0, r: 4 }}
                activeDot={{
                  r: 6,
                  stroke: "#FFC983",
                  strokeWidth: 2,
                  fill: "white",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
