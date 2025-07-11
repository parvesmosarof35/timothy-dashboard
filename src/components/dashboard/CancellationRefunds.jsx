import React from "react";
import { ChevronDown, TrendingUp } from "lucide-react";

const MetricCard = ({ title, value, percentage, dropdown = true }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-brandGray text-sm font-medium">{title}</h3>
      {dropdown && (
        <div className="flex items-center gap-1 text-brandGray cursor-pointer hover:text-brandGray transition-colors">
          <span className="text-xs">This Month</span>
          <ChevronDown className="w-3 h-3" />
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

const CancellationRefunds = () => {
  return (
    <div className=" bg-grayLightBg">
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
