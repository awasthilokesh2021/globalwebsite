import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full py-8">
      <h1 className="text-center text-4xl font-bold py-4 text-gray-800">
        Beautiful Home
      </h1>
      <p className="text-center text-gray-500 italic mb-4">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..."
      </p>
      <hr className="w-1/2 border-t-2 mx-auto border-gray-300 mb-8" />

      <div className="container mx-auto w-[92%]">
        {/* Grid Layout for Flexibility */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              What is Lorem Ipsum?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <span className="text-black text-xl font-semibold">
                Lorem Ipsum
              </span>{" "}
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Why do we use it?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <span className="text-black text-xl font-semibold">
                Lorem Ipsum
              </span>{" "}
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker.
            </p>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              What is Lorem Ipsum?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Why do we use it?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
