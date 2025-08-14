import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      "Redirect notice: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Techmiya Job Portal is loading...
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Please wait while we take you to the right place.
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline text-lg"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
