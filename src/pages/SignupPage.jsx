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

  <section className="flex items-center justify-center min-h-[85vh] bg-gray-50 px-4">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-8 flex flex-col gap-5"
    >
       <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Sign up
      </h1>

      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full border border-gray-400 rounded p-3 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600 transition"
      />

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-400 rounded p-3 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600 transition"
      />

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border border-gray-400 rounded p-3 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600 transition"
      />

      <p className="text-center text-gray-700 font-medium">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-700 underline">
          Login
        </Link>
      </p>

      <button className="cursor-pointer py-2 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition">
        Signup
      </button>
    </form>
  </section>
</div>


  );
};

export default SignupPage;
