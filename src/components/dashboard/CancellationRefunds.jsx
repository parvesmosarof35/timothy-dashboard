import React, { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";

const MetricCard = ({ title, value, percentage, dropdown = true }) => {
  const [filter, setFilter] = useState("This Month");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-brandGray text-sm font-medium">{title}</h3>

        {dropdown && (
          <div className="relative p-4 ">
            <select
              value={filter}
              onChange={handleChange}
              className="text-xs bg-transparent text-brandGray pr-2 cursor-pointer appearance-none focus:outline-none"
            >
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brandGray" />
          </div>
        )}
      </div>

      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-darkGray">
          {typeof value === "string" ? value : value.toLocaleString()}
        </div>
        <div className="flex items-center gap-1 text-brandGreen">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">{percentage}</span>
        </div>
      </div>
    </div>
  );
};

const CancellationRefunds = () => {
  return (
    <div className="bg-grayLightBg">
      <h1 className="text-2xl font-semibold text-darkGray mb-6">
        Cancellation & Refunds
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Cancelled Jobs" value={2420} percentage="20%" />
        <MetricCard title="Refunded Amount" value={2420} percentage="20%" />
        <MetricCard title="Refund Rate" value="86%" percentage="20%" />
      </div>
    </div>
  );
};

export default CancellationRefunds;
