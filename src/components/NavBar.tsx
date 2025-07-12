
import { Link } from 'react-router-dom';
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
          <Link to="/" className="hover:text-yellow-400 transition duration-300 font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/find-jobs" className="hover:text-yellow-400 transition duration-300 font-medium">
            Jobs
          </Link>
        </li>
        <li>
          <NavButton to="/admin/post-job" variant="gray">Post Job</NavButton>
        </li>
        <li>
          <NavButton to="/admin/jobs" variant="gray">Manage Jobs</NavButton>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300 font-medium">
            About
          </Link>
        </li>
        <li>
          <NavButton to="/login">Login</NavButton>
        </li>
        <li>
          <NavButton to="/register">Register</NavButton>
        </li>
      </ul>
    </nav>
  );
}
