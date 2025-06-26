import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/techjobcareer.png';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <span className="font-bold text-xl">TechJobCareer</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/find-jobs" className="hover:text-yellow-400 transition duration-300">
            Find Jobs
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/admin/post-job" className="text-white bg-gray-800 px-4 py-2 rounded">Post Job</Link>
        </li>
             <li>
          <Link to="/admin/jobs" className="text-white bg-gray-800 px-4 py-2 rounded">Edit Job</Link>
        </li>
      </ul>
    </nav>
  );
}
