import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle redirect to Home
  const handleRedirect = () => {
    navigate("/"); // Redirects to the home page
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7233099/pexels-photo-7233099.jpeg?auto=compress&cs=tinysrgb&w=600)", // Replace with your image URL
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Cross Button */}
      <button
        onClick={handleRedirect} // On click, redirect to Home
        className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full hover:bg-red-700 transition duration-300 z-10"
      >
        &#x2716;
      </button>

      {/* Content */}
      <div className="relative z-10 container w-[80%] mx-auto py-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">About Page</h1>
        <hr className="w-1/2 border-t-2 border-white mx-auto mb-8" />

        <div className="py-4 bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-2">Our Profession</h2>
          <p className="text-lg">
            A professional courier is a service provider that specializes in
            transporting valuable or high-priority goods, documents, and
            packages. They offer efficient and secure delivery solutions,
            focusing on customer service, tracking, and tracing capabilities.
          </p>
        </div>

        <div className="py-4 bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-sm mt-4">
          <h2 className="text-2xl font-bold mb-2">Carrier Us</h2>
          <p className="text-lg">
            Professional couriers cater to industries like logistics, e-commerce,
            law firms, and financial institutions. They ensure secure and reliable
            delivery, handling valuable items with care.
          </p>
        </div>

        <div className="py-4 bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-sm mt-4">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <p className="text-lg">
            These couriers typically have strong tracking and customer service,
            offering real-time updates on shipment status for better transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

