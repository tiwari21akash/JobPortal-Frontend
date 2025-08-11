import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/techjobcareer.png';

// Reusable nav button styled like login card
type NavButtonProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'yellow' | 'gray';
};

function NavButton({ to, children, variant = 'yellow' }: NavButtonProps) {
  const base = "px-6 py-2 rounded-full font-semibold transition mx-1 border";
  const yellow = "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#192235]";
  const gray = "border-gray-800 text-white bg-gray-800 hover:bg-gray-700 hover:text-white";
  const style = variant === 'gray' ? `${base} ${gray}` : `${base} ${yellow}`;
  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();

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
    <nav className="flex justify-center items-center p-4 bg-gray-900 text-white relative sticky top-0 z-50 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 top-2 absolute left-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <span className="font-bold text-xl">TechJobCareer</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 items-center justify-center">
        <li>
          <Link to="/" className={getLinkClasses('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/find-jobs" className={getLinkClasses('/find-jobs')}>
            Jobs
          </Link>
        </li>
        {/* <li>
          <NavButton to="/admin/post-job" variant="gray">Post Job</NavButton>
        </li>
        <li>
          <NavButton to="/admin/jobs" variant="gray">Manage Jobs</NavButton>
        </li> */}
        <li>
          <Link to="/about" className={getLinkClasses('/about')}>
            About
          </Link>
        </li>
        {/* <li>
          <NavButton to="/login">Login</NavButton>
        </li>
        <li>
          <NavButton to="/register">Register</NavButton>
        </li> */}
      </ul>
    </nav>
  );
}
