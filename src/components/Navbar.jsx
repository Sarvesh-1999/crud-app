import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-20 w-full px-2 shadow-xl flex items-center justify-between">
      <div className="font-bold md:text-2xl">
        <Link to="/">Crud-App</Link>
      </div>

      <nav className="hidden md:flex gap-8 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>

      <div className="font-semibold">
        <Link to="/login">
          <button className="cursor-pointer border rounded px-3 py-1 md:px-6 md:py-2 text-blue-600 border-blue-600">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="cursor-pointer border rounded px-3 py-1 md:px-6 md:py-2 ms-2 bg-blue-600 text-white">
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
