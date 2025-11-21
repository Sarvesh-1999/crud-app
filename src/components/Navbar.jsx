import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  let { pathname } = useLocation();
  let navigate = useNavigate();

  let token = sessionStorage.getItem("accesstoken");

  const handleLogout = () => {
    if (confirm("Are you sure ??")) {
      sessionStorage.removeItem("accesstoken");
      navigate("/login");
      toast.success("logged out successfully");
    }
  };

  return (
    <header className="h-20 sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md px-4 md:px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="font-bold text-2xl text-blue-700 tracking-wide">
        <Link to="/">Crud-App</Link>
      </div>

      {/* Hide nav on login/signup pages */}
      {pathname === "/login" || pathname === "/signup" ? null : (
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>

          <Link
            to="/contacts"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Contacts
          </Link>
        </nav>
      )}

      {/* Right Section */}
      <div className="font-medium flex items-center gap-4">
        {token ? (
          <>
            {/* Logout */}
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full shadow transition"
            >
              <FaPowerOff size={16} />
            </button>
          </>
        ) : (
          <>
            {/* Login */}
            <Link to="/login">
              <button className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                Login
              </button>
            </Link>

            {/* Signup */}
            <Link to="/signup">
              <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
