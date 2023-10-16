import React from "react";

const Error = ({ children }) => {
  return (
    <div className="p-3 m-2 uppercase bg-red-600 text-white text-center">
      {children}
    </div>
  );
};

export default Error;
