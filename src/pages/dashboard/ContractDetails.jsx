import React from "react";

const ContractDetails = () => {
  const contractData = {
    id: "3253453465",
    title: "This is the title of the contract",
    rate: "$5.00/h",
    orderId: "8498494494",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum id nulla sit in commodo. Lorem ipsum dolor sit amet consectetur. Vestibulum id nulla sit in commodo. Lorem ipsum dolor sit amet consectetur. Vestibulum id nulla sit in commodo.",
    milestones: [
      {
        id: 1,
        title: "Project Awarded",
        amount: "$200",
        date: "12 Dec 2023",
        description: "Lorem ipsum dolor sit amet consectetur. Vestibulum id nulla sit in commodo. Lorem ipsum dolor sit amet consectetur.",
        status: "completed",
      },
      {
        id: 2,
        title: "First Milestone",
        amount: "$650",
        date: "12 Dec 2023",
        description: "Lorem ipsum dolor sit amet consectetur. Vestibulum id nulla sit in commodo. Lorem ipsum dolor sit amet consectetur.",
        status: "completed",
      },
      {
        id: 3,
        title: "Second Milestone",
        amount: "$200",
        date: "18 Dec 2023",
        description: "Lorem ipsum dolor sit amet consectetur. Vestibulum id nulla sit in commodo. Lorem ipsum dolor sit amet consectetur.",
        status: "completed",
      },
      {
        id: 4,
        title: "Third Milestone",
        amount: "$650",
        date: "20 Dec 2023",
        description: "Lorem ipsum dolor sit amet consectetur. Vestibulum id nulla sit in commodo. Lorem ipsum dolor sit amet consectetur.",
        status: "completed",
      },
    ],
  };

  const getStatusColor = (status) => {
    return status === "completed" ? "bg-orange-500" : "bg-gray-300";
  };

  const getAmountColor = (status) => {
    return status === "completed" ? "text-black" : "text-gray-400";
  };

  // Determine index of last completed milestone
  const lastCompletedIndex = contractData.milestones
    .map((m) => m.status)
    .lastIndexOf("completed");

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-lg font-semibold text-gray-800 mb-2">
          Contract ID: {contractData.id}
        </h1>
      </div>

      {/* Contract Info */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-medium text-gray-800">
            {contractData.title}
          </h2>
          <span className="text-base font-semibold text-gray-600">
            {contractData.rate}
          </span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-sm text-orange-500 font-medium">Order ID:</span>
          <span className="text-sm text-gray-600 ml-2">
            {contractData.orderId}
          </span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          {contractData.description}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Grey line */}
        <div className="absolute left-[111px] top-2 bottom-0 w-0.5 bg-gray-200"></div>

        {/* Colored line */}
{lastCompletedIndex >= 0 && (
  <div
    className="absolute left-[111px] w-0.5 bg-orange-500"
    style={{
      top: "0",
      height: `${(lastCompletedIndex ) * 9.5}rem`,
    }}
  />
)}


        {contractData.milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className="relative flex items-start mb-24 last:mb-0"
          >
            {/* Amount */}
            <div
              className={`w-16 text-right mr-10 ${getAmountColor(
                milestone.status
              )}`}
            >
              <span className="text-lg font-semibold">
                {milestone.amount}
              </span>
            </div>

            {/* Indicator */}
            <div
              className={`w-4 h-4 relative z-10
                ${
                  index === 0
                    ? `${getStatusColor(milestone.status)} rounded-full `
                    : `${getStatusColor(milestone.status)} rotate-45 -translate-y-1`
                }
              `}
            ></div>

            {/* Content */}
            <div className="ml-6 flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className={`text-base font-medium ${
                    milestone.status === "completed"
                      ? "text-gray-800"
                      : "text-gray-400"
                  }`}
                >
                  {milestone.title}
                </h3>
                <div className="text-right">
                  <span className="text-sm text-orange-500 font-medium">
                    Date:
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      milestone.status === "completed"
                        ? "text-gray-800"
                        : "text-gray-400"
                    }`}
                  >
                    {milestone.date}
                  </span>
                </div>
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  milestone.status === "completed"
                    ? "text-gray-600"
                    : "text-gray-400"
                }`}
              >
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractDetails;
