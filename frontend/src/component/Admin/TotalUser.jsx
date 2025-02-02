import React, { useEffect, useState } from 'react';

export const TotalUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token"); 

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        alert("You are not authenticated. Please log in.");
        window.location.href = "/login";
        return;
      }

      try {
        const response = await fetch("https://localhost:44307/api/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Pass the token from localStorage
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            alert("Unauthorized! Please log in again.");
            window.location.href = "/login";
          } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          return;
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]); // We want to run this effect every time the token changes

  return (
    <div>
      <h1 className="text-2xl font-bold">Total Users</h1>
      
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.UId}>
                <p><strong>Username:</strong> {user.Username}</p>
                <p><strong>Email:</strong> {user.Email}</p>
                <p><strong>Role:</strong> {user.Role}</p>
                <hr />
              </li>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </ul>
      )}
    </div>
  );
};
