import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    let {name , value} = e.target
    setFormData({...formData , [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange}/>
        <input type="email" name="email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
        <input type="password" name="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
        <p>Already have an account? <Link to="/login">login</Link></p>
        <button>Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
