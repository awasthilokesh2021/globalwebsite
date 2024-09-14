import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [User, setUser] = useState({
    fullname: "",
    lastname: "",
    email: "",
    address: "",
  });

  // value storage
  const HandleInputBtn = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  // submit button
  const ButtonClick = () => {
    alert("user successful regestration");
    setUser({
      fullname: "",
      lastname: "",
      email: "",
      address: "",
    });
  };

  const navigate = useNavigate();
  // handle button
  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Cross Button */}
      <button
        onClick={handleRedirect}
        className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full hover:bg-red-700 transition duration-300"
      >
        &#x2716;
      </button>

      {/* Login Form */}
      <div className="w-[80%] max-w-lg bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Login Form
        </h1>
        <hr className="w-1/2 border-t-2 mx-auto border-gray-400 mb-6" />

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-lg text-gray-700">Full Name</label>
            <input
              placeholder="Enter your full name"
              name="fullname"
              value={User.fullname}
              onChange={HandleInputBtn}
              className="px-4 py-2 rounded-lg bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg text-gray-700">Last Name</label>
            <input
              placeholder="Enter your last name"
              name="lastname"
              value={User.lastname}
              onChange={HandleInputBtn}
              className="px-4 py-2 rounded-lg bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg text-gray-700">Email</label>
            <input
              placeholder="Enter your email"
              name="email"
              value={User.email}
              onChange={HandleInputBtn}
              type="email"
              className="px-4 py-2 rounded-lg bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg text-gray-700">Address</label>
            <input
              placeholder="Enter your address"
              name="address"
              value={User.address}
              onChange={HandleInputBtn}
              type="text"
              className="px-4 py-2 rounded-lg bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              onClick={ButtonClick}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
