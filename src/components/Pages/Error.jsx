import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Oooops !</h1>
      <h1>Page not Fount</h1>
      <Link to="/" className="p-2 bg-white">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
