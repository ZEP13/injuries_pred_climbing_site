import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-300">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
        </div>

        <div>
          <NavLink to="/profile" className="hover:text-gray-300">Profile</NavLink>
        </div>
      </div>
    </nav>
  );
}

