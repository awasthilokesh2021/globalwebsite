import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo or Branding */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold">Global ideas</h2>
          </div>
          
          {/* Navigation Links */}
          <ul className="flex space-x-4 mb-6 lg:mb-0">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.07a9.864 9.864 0 0 1-3.125 1.194 4.921 4.921 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573A4.908 4.908 0 0 1 .96 9.15v.062a4.92 4.92 0 0 0 3.946 4.827 4.933 4.933 0 0 1-2.213.084 4.926 4.926 0 0 0 4.597 3.418A9.87 9.87 0 0 1 0 20.541a13.955 13.955 0 0 0 7.548 2.213c9.056 0 14.002-7.502 14.002-14.002 0-.213-.004-.426-.013-.637A9.936 9.936 0 0 0 24 4.557z"/>
              </svg>
            </a>
            <a href="https://facebook.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.326C.595 0 0 .594 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82v-9.294H9.692V10.41h3.127V7.797c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.793.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.296h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .595 23.405 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.851c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.267-.058 1.647-.07 4.85-.07m0-2.163C8.755 0 8.335.015 7.052.072c-1.392.06-2.65.328-3.637 1.315-.987.987-1.255 2.245-1.315 3.637-.057 1.283-.072 1.703-.072 4.948s.015 3.665.072 4.948c.06 1.392.328 2.65 1.315 3.637.987.987 2.245 1.255 3.637 1.315 1.283.057 1.703.072 4.948.072s3.665-.015 4.948-.072c1.392-.06 2.65-.328 3.637-1.315.987-.987 1.255-2.245 1.315-3.637.057-1.283.072-1.703.072-4.948s-.015-3.665-.072-4.948c-.06-1.392-.328-2.65-1.315-3.637-.987-.987-2.245-1.255-3.637-1.315-1.283-.057-1.703-.072-4.948-.072zM12 5.838c-3.407 0-6.162 2.755-6.162 6.162 0 3.406 2.755 6.162 6.162 6.162 3.406 0 6.162-2.755 6.162-6.162 0-3.407-2.755-6.162-6.162-6.162zm0 10.124c-2.185 0-3.963-1.778-3.963-3.963s1.778-3.963 3.963-3.963 3.963 1.778 3.963 3.963-1.778 3.963-3.963 3.963zm6.406-11.845c-.796 0-1.441.646-1.441 1.441s.646 1.441 1.441 1.441 1.441-.646 1.441-1.441-.645-1.441-1.441-1.441z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 text-gray-400">
          <p>&copy; 2024 Your Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
