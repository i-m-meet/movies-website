import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-400">MovieVerse</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-lg hover:text-gray-400">Home</Link>
        <Link to="/favorites" className="text-lg hover:text-gray-400">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
