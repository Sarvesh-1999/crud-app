import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link , useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

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

    let allSignUpUsers = JSON.parse(localStorage.getItem("users")) || []

    let authUser = allSignUpUsers.find(ele => {
      return ele.email === newUser.email && ele.password === newUser.password
    })

    console.log(authUser);

    if (authUser) {
      // toast message
      toast.success("Welcome")

      // navigate home 
      navigate("/")

      // store Date.now() in session storage for conditional rendering
      sessionStorage.setItem("accesstoken",Date.now())
    }else{
      toast.error("User does not exists")
    }
    

    setFormData({ email: "", password: "" });
  };
  return (
   <div>
  <Navbar />

  <section className="flex items-center justify-center min-h-[85vh] bg-gray-50 px-4">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm bg-white shadow-xl rounded-2xl px-8 py-10 border border-gray-200"
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Login
      </h1>

      {/* Email */}
      <label className="block text-gray-700 font-semibold mb-1">Email</label>
      <input
        type="email"
        name="email"
        className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Password */}
      <label className="block text-gray-700 font-semibold mb-1">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      {/* Sign up link */}
      <p className="text-center text-gray-600 text-sm mb-4">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
          Signup
        </Link>
      </p>

      {/* Submit Button */}
      <button
        className="w-full py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all"
      >
        Login
      </button>
    </form>
  </section>
</div>

  )
}

export default LoginPage