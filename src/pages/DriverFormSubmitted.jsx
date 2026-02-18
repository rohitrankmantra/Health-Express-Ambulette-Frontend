import React from "react";
import { Link } from "react-router-dom";

const DriverFormSubmitted = () => {
  return (
    <div className="w-full max-w-[90vw] mx-auto px-3 md:px-[5vw] py-[10vh] bg-gradient-to-br from-slate-100 to-slate-300 rounded-3xl shadow-2xl text-center">
      <h1 className="text-2xl md:text-[2.2vw] font-extrabold text-blue-800">Application Submitted</h1>
      <p className="mt-4 text-sm md:text-[1vw] font-semibold text-slate-700">
        Your driver application has been submitted and is waiting for review.
      </p>
      <p className="mt-2 text-sm md:text-[1vw] text-slate-600">
        We will contact you shortly with next steps.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default DriverFormSubmitted;
