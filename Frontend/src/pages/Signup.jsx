import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";
import { OnFormChange } from "../components/OnformChange";
import { ErrorHandler } from "../components/Errorhandler";
import { userAxios } from "../utils/instance";
import { createUserApi } from "../utils/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Signup = () => {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    AccountNumber: "",
    IntroducerID: "",
  };
  const [formData, handleChange] = OnFormChange(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your full name";
    if (!formData.AccountNumber)
      newErrors.AccountNumber = "Please enter a valid account number";
    setErrors(newErrors);
    setTimeout(() => {
      setErrors({});
    }, 2000);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    try {
      const res = await userAxios.post(createUserApi, formData);
      if (res && res.data) {
        toast.success("Successfully created!");
        handleChange({ target: { name: "name", value: "" } });
        handleChange({ target: { name: "AccountNumber", value: "" } });
        handleChange({ target: { name: "IntroducerID", value: "" } });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response);

        const errorMessage =
          error.response.data.message ||
          "An error occurred. Please try again later.";
        toast.error(errorMessage);
      } else if (error.request) {
        toast.error(
          "Network error. Please check your connection and try again."
        );
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-violet-200 opacity-50"></div>
      <div className="p-8 w-full max-w-md bg-white shadow-lg rounded-xl opacity-95 z-10">
        <p className="ml-4 font-serif text-gray-800 text-md mt-4 mb-4 text-center">
          Create Account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                autoComplete="off"
              />
            </div>
            <ErrorHandler errors={errors} name="name" />
          </div>

          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <MdAccountBalance />
              </span>
              <input
                type="text"
                name="AccountNumber"
                value={formData.AccountNumber}
                onChange={handleChange}
                placeholder="Account Number"
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <ErrorHandler errors={errors} name="AccountNumber" />
          </div>

          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <VscReferences />
              </span>
              <input
                type="text"
                name="IntroducerID"
                value={formData.IntroducerID}
                onChange={handleChange}
                placeholder="Referral ID"
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-5 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          If you have a{" "}
          <span className="text-blue-500 font-semibold">referral ID</span>,
          please mention it above.
        </p>
      </div>
    </section>
  );
};

export default Signup;
