import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";
import { HiArrowTrendingDown } from "react-icons/hi2";

const CommunicationSupport = () => {
  // Pie chart data with updated colors to match the image
  const severityData = [
    { name: "Critical", value: 410, color: "#8B4513" }, // Brown
    { name: "High", value: 142, color: "#FF8C00" }, // Orange
    { name: "Medium", value: 340, color: "#FFD700" }, // Light orange/yellow
    { name: "Low", value: 590, color: "#FFA500" }, // Orange
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100  mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-darkGray mb-1">
            Communication & Support
          </h2>
          <p className="text-xl text-brandGray">Reported Issues</p>
        </div>

        {/* Date Selector */}
        <div className="flex items-center text-xs text-brandGray bg-grayLightBg px-3 py-1.5 rounded-full border">
          Today <IoIosArrowDown className="ml-1 text-brandGray" size={12} />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="space-y-6">
        <div className="flex justify-center gap-6 md:gap-10">
          {/* Pie Chart */}
          <div className="flex justify-center">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={severityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={90}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {severityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-6">
              {/* Total Issues */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-greenMutedBg rounded-md flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-brandGreen" />
                </div>
                <div>
                  <p className="text-md text-brandGray ">Total Issues</p>
                  <p className="text-lg font-bold text-darkGray">120</p>
                </div>
              </div>

              {/* Pending Issues */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-orangeLightBg rounded-md flex items-center justify-center">
                  <HiArrowTrendingDown className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-md text-brandGray">Pending Issues</p>
                  <p className="text-lg font-bold text-darkGray">1,009,123</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Severity Legend */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
            <div className="flex justify-between items-center flex-1">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[#8B4513]"></div>
                <span className="text-sm font-medium text-darkGray">
                  Critical
                </span>
              </div>
              <span className="text-sm font-bold text-darkGray">410</span>
            </div>

            <div className="flex justify-between items-center flex-1">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[#FF8C00]"></div>
                <span className="text-sm font-medium text-darkGray">High</span>
              </div>
              <span className="text-sm font-bold text-darkGray">142</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
            <div className="flex justify-between items-center flex-1">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
                <span className="text-sm font-medium text-darkGray">
                  Medium
                </span>
              </div>
              <span className="text-sm font-bold text-darkGray">340</span>
            </div>

            <div className="flex justify-between items-center flex-1">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[#FFA500]"></div>
                <span className="text-sm font-medium text-darkGray">Low</span>
              </div>
              <span className="text-sm font-bold text-darkGray">590</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationSupport;
