import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-sm">
            This internship portal connects students with industry professionals, offering 
            opportunities to learn and grow.
          </p>
        </div>

        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">Email: support@internhere.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>

        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white transition-colors duration-300 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.293H9.745V10.62h3.075V8.09c0-3.042 1.855-4.695 4.566-4.695 1.298 0 2.415.097 2.74.14v3.18l-1.882.001c-1.476 0-1.762.702-1.762 1.733v2.275h3.525l-.46 3.088h-3.064V24h6.007c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white transition-colors duration-300 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482C7.69 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827a4.902 4.902 0 01-2.224.085c.627 1.956 2.445 3.379 4.6 3.419a9.868 9.868 0 01-6.102 2.104c-.396 0-.788-.023-1.175-.068a13.93 13.93 0 007.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white transition-colors duration-300 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.09 20.452H3.64V9h3.45v11.452zM5.365 7.719c-1.11 0-2.01-.902-2.01-2.01 0-1.11.9-2.01 2.01-2.01 1.11 0 2.01.9 2.01 2.01 0 1.108-.9 2.01-2.01 2.01zM20.452 20.452h-3.452v-5.89c0-1.403-.03-3.208-1.954-3.208-1.957 0-2.256 1.527-2.256 3.105v5.993h-3.45V9h3.314v1.563h.048c.461-.875 1.584-1.797 3.263-1.797 3.486 0 4.129 2.295 4.129 5.279v6.407z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm border-t border-gray-400 pt-4">
        <p>&copy; 2024 Internship Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
