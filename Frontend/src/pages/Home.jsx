import React from "react";
import image from "../assets/image.jpg";

const HomePage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-100 to-violet-200  text-white">
        <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0">
            <img
              src={image}
              alt="Bank Banner"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Classic Bank
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Trusted by millions for secure and reliable banking services. Join
              us today and experience banking the classic way.
            </p>
            <a
              href="#create-account"
              className="bg-white text-blue-600 px-6 py-3 text-lg rounded-full font-semibold transition duration-300 hover:bg-blue-100"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Why Choose Classic Bank?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            We offer a range of banking services to meet all your needs, from
            savings to personal loans. With Classic Bank, your money is safe,
            secure, and always within reach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                Secure Banking
              </h3>
              <p>
                With state-of-the-art encryption and security protocols, your
                money and personal information are always safe with us.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                24/7 Support
              </h3>
              <p>
                Our customer support team is always available to assist you with
                any questions or issues, day or night.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                Easy Access
              </h3>
              <p>
                Whether it's via mobile or desktop, we provide easy access to
                all your banking needs at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
