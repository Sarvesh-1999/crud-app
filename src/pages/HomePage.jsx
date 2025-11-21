import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto flex flex-col items-center text-center mt-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
          Employee Management System
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Manage employee details, track records, register new employees, and
          maintain company data all in one place.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/create-emp"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Add New Employee
          </Link>

          <Link
            to="/all-emp"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition"
          >
            View Employees
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mt-24 px-6 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            👤 Employee Profiles
          </h3>
          <p className="mt-2 text-gray-600">
            Add, update and track employee information with ease.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            📊 Data Management
          </h3>
          <p className="mt-2 text-gray-600">
            Store, edit, and manage company employee records.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            🚀 Fast & Efficient
          </h3>
          <p className="mt-2 text-gray-600">
            Simple UI with smooth navigation for quick task handling.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Employee Management — All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
