import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { WasteContributorForm } from './WasteContributorForm'; // Import the form component

export const WastePage = () => {
  const [wasteContributors, setWasteContributors] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedContributor, setSelectedContributor] = useState(null);

  // Fetch the list of waste contributors
  useEffect(() => {
    const fetchWasteContributors = async () => {
      try {
        const response = await axios.get("https://localhost:44307/api/WasteContributor");
        setWasteContributors(response.data);
      } catch (error) {
        console.error("Error fetching waste contributors:", error);
      }
    };

    fetchWasteContributors();
  }, []);

  const toggleForm = (contributor) => {
    setSelectedContributor(contributor);  // Set the contributor whose details are being updated
    setIsFormOpen(!isFormOpen);  // Toggle the form
  };

  return (
    <section className="py-4 md:py-8">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Waste Contribution Dashboard
            </h1>

            {/* Display waste contributors list */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">List of Waste Contributions</h2>
              {wasteContributors.length > 0 ? (
                <ul className="space-y-2">
                  {wasteContributors.map((contributor) => (
                    <li key={contributor.contributorId} className="bg-gray-100 p-3 rounded-md">
                      <p><strong>Waste Type:</strong> {contributor.wasteType}</p>
                      <p><strong>Waste Quantity:</strong> {contributor.wasteQuantity}</p>
                      <p><strong>Contribution Date:</strong> {contributor.contributionDate}</p>
                      <p><strong>Status:</strong> {contributor.status}</p>

                      {/* Link to toggle form for this contributor */}
                      <button 
                        onClick={() => toggleForm(contributor)} 
                        className="text-teal-600 font-bold mt-2"
                      >
                        {isFormOpen && selectedContributor?.contributorId === contributor.contributorId ? 'Close Form' : 'Edit Contribution'}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No waste contributions found.</p>
              )}
            </div>

            {/* Button to toggle the form for adding a new contributor */}
            <button 
              onClick={() => toggleForm(null)} // Pass null to indicate no specific contributor
              className="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full mt-4"
            >
              {isFormOpen ? 'Close Contribution Form' : 'Add New Waste Contribution'}
            </button>

            {/* Conditionally render the form */}
            {isFormOpen && <WasteContributorForm selectedContributor={selectedContributor} />}
          </div>
        </div>
      </div>
    </section>
  );
};
