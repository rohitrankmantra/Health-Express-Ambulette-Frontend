import React from "react";
import { Link, useLocation } from "react-router-dom";

const DriverFormSubmitted = () => {
  const location = useLocation();
  const fileUrls = location.state?.fileUrls;

  return (
    <div className="w-full max-w-[90vw] mx-auto px-3 md:px-[5vw] py-[10vh] bg-gradient-to-br from-slate-100 to-slate-300 rounded-3xl shadow-2xl text-center">
      <h1 className="text-2xl md:text-[2.2vw] font-extrabold text-blue-800">Application Submitted Successfully</h1>
      <p className="mt-4 text-sm md:text-[1vw] font-semibold text-slate-700">
        Your driver application and documents have been received.
      </p>

      {fileUrls && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-inner max-w-lg mx-auto">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Uploaded Document URLs:</h3>
          <ul className="text-left space-y-2 text-sm">
            {fileUrls.driverLicense && (
              <li>
                <strong>Driver License:</strong>
                <a href={fileUrls.driverLicense} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                  View Document
                </a>
              </li>
            )}
            {fileUrls.ssnCard && (
              <li>
                <strong>SSN Card:</strong>
                <a href={fileUrls.ssnCard} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                  View Document
                </a>
              </li>
            )}
            {fileUrls.physical19A && (
              <li>
                <strong>Physical 19-A:</strong>
                <a href={fileUrls.physical19A} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                  View Document
                </a>
              </li>
            )}
          </ul>
        </div>
      )}

      <p className="mt-6 text-sm md:text-[1vw] text-slate-600">
        We will contact you shortly with the next steps.
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
