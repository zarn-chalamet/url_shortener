import React from 'react';
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <div className="p-6  rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">About Linklytics</h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links.
      </p>

      {/* Section 1: Simple URL Shortening */}
      <div className="mb-8">
        <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaLink className="text-blue-500 text-4xl mr-6" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Simple URL Shortening</h2>
            <p className="text-gray-600">
              Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Powerful Analytics */}
      <div className="mb-8">
        <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaShareAlt className="text-green-500 text-4xl mr-6" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Powerful Analytics</h2>
            <p className="text-gray-600">
              Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Enhanced Security */}
      <div className="mb-8">
        <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaEdit className="text-purple-500 text-4xl mr-6" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Enhanced Security</h2>
            <p className="text-gray-600">
              Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Fast and Reliable */}
      <div>
        <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaChartLine className="text-red-500 text-4xl mr-6" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Fast and Reliable</h2>
            <p className="text-gray-600">
              Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
