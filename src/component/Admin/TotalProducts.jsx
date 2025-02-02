import React, { useState, useEffect } from 'react';
import { SideBar } from './SideBar'; 

export const TotalProducts = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const sampleUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
      ];
      setUsers(sampleUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return <div className="text-center text-lg font-medium">Loading...</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Component */}
      <SideBar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

      {/* Mobile hamburger button */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden text-white bg-gray-800 p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Content Area */}
      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? 'translate-x-60' : 'translate-x-0'
        } w-full max-w-full overflow-x-auto`}
      >
        <div className="font-[sans-serif] overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4 text-left text-sm font-medium">ID</th>
                <th className="p-4 text-left text-sm font-medium">Name</th>
                <th className="p-4 text-left text-sm font-medium">Email</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {users.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'bg-blue-50' : ''}>
                  <td className="p-4 text-sm text-black">{user.id}</td>
                  <td className="p-4 text-sm text-black">{user.name}</td>
                  <td className="p-4 text-sm text-black">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
