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
      <section className="flex items-center justify-center h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="shadow-lg border border-gray-200 flex flex-col p-8 rounded-lg gap-5"
        >
          <h1 className="text-center text-3xl font-semibold mb-5">Login</h1>
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
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 underline">
              Signup
            </Link>
          </p>
          <button className="cursor-pointer py-2 rounded bg-blue-600 text-white hover:bg-blue-800">
            Login
          </button>
        </form>
      </section>
    </div>
  )
}

export default LoginPage