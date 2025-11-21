import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { api } from "../axios/axiosInstance";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllEmpPage = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

 async function getAllEmployees() {
  try {
    setIsLoading(true);

    setTimeout(async () => {
      let res = await api.get("/employees");
      setEmployees(res.data);
      setIsLoading(false);
    }, 2000);

  } catch (error) {
    toast.error("Something went wrong");
    setIsLoading(false);
  }
}


  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="px-6 py-8">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">All Employees</h1>
            <p className="text-gray-600">
              Total Employees : {employees.length}
            </p>
          </div>
        </header>

        {isLoading && <p className="text-center text-lg">Loading...</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="border border-gray-300 shadow-md rounded-xl p-5 bg-white transition hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {emp.username}
              </h2>

              <div className="space-y-1 text-gray-700">
                <p>
                  <b>Emp ID:</b> {emp.empId}
                </p>
                <p>
                  <b>Email:</b> {emp.email}
                </p>
                <p>
                  <b>Designation:</b> {emp.designation}
                </p>
                <p>
                  <b>Age:</b> {emp.age}
                </p>
                <p>
                  <b>Joining:</b> {emp.dateOfJoining}
                </p>
              </div>

              <div className="flex gap-3 mt-5">
                <Link to={`/edit-emp/${emp.id}`} className="w-1/2">
                  <button className="w-full py-2 rounded-lg bg-amber-400 hover:bg-amber-500 font-semibold">
                    Edit
                  </button>
                </Link>
                <button className="w-1/2 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllEmpPage;
