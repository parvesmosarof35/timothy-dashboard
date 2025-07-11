import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

// Chart data
const data = [
  { name: "Jan", payments: 4000 },
  { name: "Feb", payments: 3000 },
  { name: "Mar", payments: 2000 },
  { name: "Apr", payments: 2780 },
  { name: "May", payments: 1890 },
  { name: "Jun", payments: 2390 },
  { name: "Jul", payments: 3490 },
  { name: "Aug", payments: 4000 },
  { name: "Sep", payments: 3000 },
  { name: "Oct", payments: 2000 },
  { name: "Nov", payments: 2780 },
  { name: "Dec", payments: 1890 },
];

// Shadow line
const shadowData = data.map(item => ({
  ...item,
  payments: item.payments - 100,
}));

// Custom tooltip
const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length > 0 && coordinate) {
    const value = payload[0].value.toFixed(2).replace(".", ",");

    return (
      <div
        style={{
          position: "absolute",
          left: coordinate.x,
          top: coordinate.y - 50,
          transform: "translate(-50%, -100%)",
          background: "#FFD49D",
          borderRadius: "8px",
          padding: "8px 12px",
          fontWeight: "bold",
          color: "#000",
          fontSize: "14px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          pointerEvents: "none",
          zIndex: 999,
        }}
      >
        ${value}
        <div
          style={{
            position: "absolute",
            bottom: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid #FFD49D",
          }}
        />
      </div>
    );
  }
  return null;
};

// Chart component
const PaymentChart = () => {
return (
  <div className=" col-span-6">
    <h1 className="text-2xl font-semibold mb-6 text-darkGray">Payment</h1>


  <div className="rounded-lg col-span-4 p-12 bg-white shadow">

    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffdf3a" />
              <stop offset="100%" stopColor="#ffb13a" />
            </linearGradient>
          </defs>

          {/* Dashed grid */}
          <CartesianGrid strokeDasharray="6 4" stroke="#F3F4F6" />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, dy: 5 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, dx: -10 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value / 1000}k`}
          />

          <Tooltip content={<CustomTooltip />} />

          {/* Shadow line */}
          <Line
            type="monotone"
            data={shadowData}
            dataKey="payments"
            stroke="#ededed"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />

          {/* Area under main line */}
          <Area
            type="monotone"
            dataKey="payments"
            stroke="none"
            fill="#FFD49D"
            fillOpacity={0.2}
          />

          {/* Main Line */}
          <Line
            type="monotone"
            dataKey="payments"
            stroke="url(#gradientLine)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#fff",
              stroke: "#FFD49D",
              strokeWidth: 3,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
  </div>
);

};

export default PaymentChart;
