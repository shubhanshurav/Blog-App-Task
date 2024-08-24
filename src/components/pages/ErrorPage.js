import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pure-greys-900 text-white">
      <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-2xl mb-8 text-pure-greys-400">
        {" "}
        Oops! Something went wrong.
      </p>
      <div className="bg-pure-greys-800 p-6 rounded-lg shadow-lg">
        <p className="font-mono text-lg">
          <span className="text-green-500">Error:</span> Page Not Found
        </p>
        <p className="font-mono text-lg">
          <span className="text-blue-500">Status Code:</span> 404
        </p>
        <p className="mt-4 text-pure-greys-500">
          It seems like the page you're looking for doesn't exist.
        </p>
        <p className="text-pure-greys-500">
          Please check the URL or go back to the home page.
        </p>
      </div>
      <Link
        to="/dashboard"
        className="mt-8 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <FaHome className="mr-2" /> Take Me Dashboard
      </Link>
    </div>
  );
}

export default ErrorPage;
