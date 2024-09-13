import React from "react";
import Data from "./Data";

const Datacard = () => {
  return (
    <div className="min-h-screen w-full py-10">
      <div className="container w-[92%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg hover:shadow-blue-600 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              className="w-full h-60 object-cover"
              src={item.image}
              alt={item.subtitle}
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-sm">{item.title}</span>
                <span className="text-gray-500 text-sm">{item.views} views</span>
              </div>
              <h2 className="text-lg font-semibold">{item.subtitle}</h2>
              <p className="text-gray-600 text-sm mt-2">
                Reads: {item.read} | Likes: {item.like}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datacard;
