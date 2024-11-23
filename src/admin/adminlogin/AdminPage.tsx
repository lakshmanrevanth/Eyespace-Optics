import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (!isAdminLoggedIn) {
      navigate("/admin-login"); // Redirect to login page if not logged in
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Welcome to the Admin Dashboard
        </h1>
        <p className="text-center text-gray-700">
          This is the admin page content.
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
