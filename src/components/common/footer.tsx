import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center justify-center space-x-6">
          <NavLink to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </NavLink>
          <NavLink to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            About
          </NavLink>
          <NavLink to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </NavLink>
        </nav>
      </div>
    </footer>
  );
}