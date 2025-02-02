import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WasteContributorForm = () => {
  const navigate = useNavigate();
  const [wasteType, setWasteType] = useState('');
  const [wasteQuantity, setWasteQuantity] = useState('');
  const [contributionDate, setContributionDate] = useState('');
  const [collectedBy, setCollectedBy] = useState('');
  const [userId, setUserId] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!wasteType || !wasteQuantity || !contributionDate) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post("https://localhost:44307/api/WasteContributor", {
        wasteType,
        wasteQuantity,
        contributionDate,
        collectedBy, // Optional if you want to capture who collected the waste
        userId, // Optional if you want to associate this with a specific user
        status: "pending", // Default status
      });

      if (response.status === 200) {
        alert("Waste contribution added successfully!");
        navigate("/waste/dashboard"); // Navigate after successful submission
      }
    } catch (error) {
      console.error("Error submitting waste contribution:", error);
      alert("Error submitting waste contribution. Please try again.");
    }
  };

  return (
    <section className="py-4 md:py-8">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add Waste Contribution
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="wasteType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Waste Type
                </label>
                <input
                  type="text"
                  id="wasteType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="wasteQuantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Waste Quantity
                </label>
                <input
                  type="number"
                  id="wasteQuantity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={wasteQuantity}
                  onChange={(e) => setWasteQuantity(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contributionDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Contribution Date
                </label>
                <input
                  type="date"
                  id="contributionDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={contributionDate}
                  onChange={(e) => setContributionDate(e.target.value)}
                  required
                />
              </div>

              {/* Optional fields for collectedBy and userId */}
              <div>
                <label htmlFor="collectedBy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Collected By (Producer ID)
                </label>
                <input
                  type="number"
                  id="collectedBy"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={collectedBy}
                  onChange={(e) => setCollectedBy(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  User ID
                </label>
                <input
                  type="number"
                  id="userId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              <button type="submit" className="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full">
                Submit Waste Contribution
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
