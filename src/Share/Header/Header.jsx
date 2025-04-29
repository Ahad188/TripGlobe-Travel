 // src/components/Header.jsx
import { useState } from 'react';
import logo from '../../assets/logo-dark.png.png'; // adjust your logo path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img src={logo} alt="Logo" className="h-10" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Home</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Blog</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Distinction</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Page</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Contact</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition duration-300 ml-4">
            Book Trip
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-orange-500 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Home</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Blog</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Distinction</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Page</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300">Contact</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition duration-300 mt-2 w-full">
              Book Trip
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;