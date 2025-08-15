import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/techjobcareer.png';

// Reusable nav button styled like login card
// type NavButtonProps = {
//   to: string;
//   children: React.ReactNode;
//   variant?: 'yellow' | 'gray';
// };

// function NavButton({ to, children, variant = 'yellow' }: NavButtonProps) {
//   const base = "px-6 py-2 rounded-full font-semibold transition mx-1 border";
//   const yellow = "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#192235]";
//   const gray = "border-gray-800 text-white bg-gray-800 hover:bg-gray-700 hover:text-white";
//   const style = variant === 'gray' ? `${base} ${gray}` : `${base} ${yellow}`;
//   return (
//     <Link to={to} className={style}>
//       {children}
//     </Link>
//   );
// }

import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper function to check if the current path matches the link
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Helper function to get link classes with active state
  const getLinkClasses = (path: string) => {
    const baseClasses = "transition duration-300 font-medium";
    const activeClasses = "text-yellow-400";
    const inactiveClasses = "hover:text-yellow-400";

    return isActive(path)
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`;
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
          <span className="font-bold text-xl">TechJobCareer</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-[#192235] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 items-center justify-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 z-40 ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          <li className="my-2 md:my-0">
            <Link to="/" className={getLinkClasses('/')} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/find-jobs" className={getLinkClasses('/find-jobs')} onClick={() => setMenuOpen(false)}>
              Jobs
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/about" className={getLinkClasses('/about')} onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/contact" className={getLinkClasses('/contact')} onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
