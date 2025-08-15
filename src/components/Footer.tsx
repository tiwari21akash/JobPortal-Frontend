
import { useState } from 'react';
import { FaYoutube, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 3000);
    }
  };
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Newsletter Subscription Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-2">Stay Updated with Job Alerts</h3>
          <p className="text-sm mb-4">Sign up for our newsletter to get the latest job news delivered to your inbox.</p>
          <form className="flex justify-center max-w-xs mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-l-md text-black bg-white"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="bg-yellow-400 p-3 rounded-r-md hover:bg-yellow-500">
              Subscribe
            </button>
          </form>
          {success && (
            <div className="mt-2 text-green-400">Thank you for subscribing!</div>
          )}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Company Links */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold text-lg mb-2">TechJobCareer</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold text-lg mb-2">Support</h4>
            <ul className="space-y-2">
              <li><a href="/help" className="hover:text-yellow-400">Help & Support</a></li>
              <li><a href="/faqs" className="hover:text-yellow-400">FAQs</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Instagram Icon
              <a href="https://www.instagram.com" target="_blank" className="text-xl hover:text-yellow-400">
                <FaInstagram />
              </a> */}
              {/* YouTube Icon */}
              <a href="https://www.youtube.com/@techjobcareer" target="_blank" className="text-xl hover:text-yellow-400">
                <FaYoutube />
              </a>
              {/* Telegram Icon */}
              <a href="t.me/techjobcareer" target="_blank" className="text-xl hover:text-yellow-400">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm mt-6">
          <p>&copy; 2025 TechJobCareer. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
