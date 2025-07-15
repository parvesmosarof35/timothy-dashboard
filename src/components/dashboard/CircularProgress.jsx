import React, { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";

/* -------- CircularProgress (unchanged) -------- */
const CircularProgress = ({ percentage, size = 80 }) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3f4f6"
          strokeWidth="6"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f59e0b"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-semibold text-brandGray">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

/* -------- ContractCard with dropdown -------- */
const ContractCard = ({
  title,
  percentage,
  value,
  growth,
  defaultFilter = "This Month",
}) => {
  const [filter, setFilter] = useState(defaultFilter);

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      {/* Header + filter */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-darkGray font-medium text-sm">{title}</h3>

        {/* Filter dropdown */}
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-transparent text-xs text-brandGray pr-4 cursor-pointer appearance-none focus:outline-none"
          >
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="This Year">This Year</option>
          </select>
          <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brandGray" />
        </div>
      </div>

      {/* Circular progress */}
      <div className="flex flex-col items-center mb-6">
        <CircularProgress percentage={percentage} />
      </div>

      {/* Value + growth */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-darkGray">
          {value.toLocaleString()}
        </div>
        <div className="flex items-center gap-1 text-brandGreen">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">{growth}</span>
        </div>
      </div>
    </div>
  );
};

/* -------- Page component -------- */
const ContractManagement = () => (
  <div className="bg-grayLightBg">
    <h1 className="text-2xl font-semibold text-darkGray mb-6">
      Contract Management
    </h1>

    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-brandGray font-medium mb-6">Contract Status</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContractCard
          title="Active Contracts"
          percentage={81}
          value={2420}
          growth="20%"
        />
        <ContractCard
          title="Completed"
          percentage={61}
          value={1280}
          growth="12%"
          defaultFilter="This Week"
        />
        <ContractCard
          title="Pending"
          percentage={43}
          value={350}
          growth="8%"
          defaultFilter="Today"
        />
      </div>
    </div>
  </div>
);

export default ContractManagement;
