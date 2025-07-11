import React from "react";
import { ChevronDown, TrendingUp } from "lucide-react";

const CircularProgress = ({ percentage, size = 80 }) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3f4f6"
          strokeWidth="6"
          fill="transparent"
        />
        {/* Progress circle */}
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

const ContractCard = ({ title, subtitle, percentage, value, growth }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-200">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-darkGray font-medium text-sm">{title}</h3>
        <div className="flex items-center gap-1 text-brandGray text-xs mt-1">
          <span>{subtitle}</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center mb-6">
      <CircularProgress percentage={percentage} />
    </div>

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

const ContractManagement = () => {
  return (
    <div className=" bg-grayLightBg">
      <h1 className="text-2xl font-semibold text-darkGray mb-6">
        Contract Management
      </h1>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-brandGray font-medium mb-6">Contract Status</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContractCard
            title="Active Contracts"
            subtitle="All"
            percentage={81}
            value={2420}
            growth="20%"
          />
          <ContractCard
            title="Completed"
            subtitle="this month"
            percentage={81}
            value={2420}
            growth="20%"
          />
          <ContractCard
            title="Pending"
            subtitle="year"
            percentage={81}
            value={2420}
            growth="20%"
          />
        </div>
      </div>
    </div>
  );
};

export default ContractManagement;
