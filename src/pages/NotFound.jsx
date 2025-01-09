import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white px-8 py-6 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          Mau Kemana? Route ini nggak ada
        </p>
        <Link to="/">
          <Button text="Kembali ke Home" variant="primary" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
