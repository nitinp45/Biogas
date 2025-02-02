import React from "react";

export const BiogasCard = () => {
  return (
    <div className="flex space-x-6 mb-6">
      {/* Card 1: Total Users */}
      <div className="flex-1 px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-gray-500 truncate">
          Total Users
        </div>
        <div className="mt-1 text-3xl font-semibold text-gray-900">
          12,000
        </div>
      </div>

      {/* Card 2: Total Profit */}
      <div className="flex-1 px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-gray-500 truncate">
          Total Profit
        </div>
        <div className="mt-1 text-3xl font-semibold text-gray-900">
          $450k
        </div>
      </div>

      {/* Card 3: Total Orders */}
      <div className="flex-1 px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-gray-500 truncate">
          Total Orders
        </div>
        <div className="mt-1 text-3xl font-semibold text-gray-900">
          20,000
        </div>
      </div>
    </div>
  );
};
