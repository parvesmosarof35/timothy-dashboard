import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { HiDotsVertical } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";

const PendingVerification = () => {
  const total = 2420;
  const partners = 968;
  const users = total - partners;

  const data = [
    { name: "Partners", value: partners },
    { name: "Users", value: users },
  ];

  const COLORS = ["#FFB13A", "#FFDF3A"];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-darkGray">
        Pending Verification
      </h1>
      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="flex justify-around w-full mb-2">
            <div className="text-3xl font-normal">{total.toLocaleString()}</div>
            <div className="text-2xl font-normal text-brandGray">
              <HiDotsVertical className="mt-1" />
            </div>
          </div>

          <div className="flex items-center justify-around w-full">
            <div className="relative w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius="80%"
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col gap-5 ">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FFB13A] mr-2" />
                <span className="text-sm">Partners</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FFDF3A] mr-2" />
                <span className="text-sm">Users</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <button className="flex w-full justify-center gap-6 items-center text-white bg-[#ffd49d] py-3 px-8 rounded-lg">
            <span>Verification</span> <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingVerification;
