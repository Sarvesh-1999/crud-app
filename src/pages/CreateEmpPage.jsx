import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { api } from "../axios/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateEmpPage = () => {
  const [empFormData, setEmpFormData] = useState({
    username: "",
    email: "",
    password: "",
    empId: "",
    designation: "",
    age: "",
    dateOfJoining: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmpFormData({ ...empFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { ...empFormData };

    try {
      let res = await api.post("/employees", payload);
      // console.log(res);

      if (res.status === 201) {
        toast.success("Employee Registered ☑️");
        navigate("/all-emp")
      }
    } catch (err) {
      toast.error("Registration Failed ❌");
    }
  };

  return (
    <div className=" bg-gray-50">
      <Navbar />

      <div className="max-w-xl mx-auto m-10 bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          New Employee Registration
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
              value={empFormData.username}
              name="username"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter email"
              required
              value={empFormData.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter password"
              required
              value={empFormData.password}
              name="password"
              onChange={handleChange}
            />
          </div>

          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employee ID
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="EMP12345"
              required
              value={empFormData.empId}
              name="empId"
              onChange={handleChange}
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Manager / Developer / HR"
              required
              value={empFormData.designation}
              name="designation"
              onChange={handleChange}
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter age"
              required
              value={empFormData.age}
              name="age"
              onChange={handleChange}
            />
          </div>

          {/* Date of Joining */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Joining
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-500"
              required
              value={empFormData.dateOfJoining}
              name="dateOfJoining"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Register Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmpPage;
