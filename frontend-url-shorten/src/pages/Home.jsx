import React from 'react';
import image from "../assets/img2.png";

const Home = () => {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-16">

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center mb-10 space-y-8 md:space-y-0">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl lg:text-7xl font-bold text-gray-800 mb-4">
            Linklytics Simplifies URL Shortening For Efficient Sharing
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto md:mx-0">
            Linklytics streamlines the process of URL shortening, making sharing links effortless and efficient. With its user-friendly interface, Linklytics allows you to generate concise, easy-to-share URLs in seconds. Simplify your sharing experience with Linklytics today.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Manage Links
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Create Short Link
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Linklytics Example"
            className="w-full"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          Trusted by individuals and teams at the world's best companies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Simple URL Shortening</h3>
            <p className="text-gray-600">
              Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Powerful Analytics</h3>
            <p className="text-gray-600">
              Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Enhanced Security</h3>
            <p className="text-gray-600">
              Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast and Reliable</h3>
            <p className="text-gray-600">
              Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
