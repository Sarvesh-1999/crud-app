import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { ...formData };

    if (newUser.email.trim() === "" && newUser.username.trim() === "" && newUser.password.trim() === "") {
      toast("Enter Credentials !", {icon: "☠️"});
      return;
    }

    let allusers = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = allusers.find((ele) => ele.email === newUser.email);

    if (existingUser) {
      toast.error("User already exists");
      return;
    }
    allusers.push(newUser);
    localStorage.setItem("users", JSON.stringify(allusers));

    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div>
      <Navbar />
      <section className="flex items-center justify-center h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="shadow-lg border border-gray-200 flex flex-col p-8 rounded-lg gap-5"
        >
          <h1 className="text-center text-3xl font-semibold mb-5">Sign up</h1>
          <input
            type="text"
            name="username"
            className="border border-gray-500 rounded p-3 w-2xs mb-3"
            id="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="border border-gray-500 rounded p-3 w-2xs"
            id="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="border border-gray-500 rounded p-3 w-2xs"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="text-center font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 underline">
              Login
            </Link>
          </p>
          <button className="cursor-pointer py-2 rounded bg-blue-600 text-white hover:bg-blue-800">
            Signup
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignupPage;
