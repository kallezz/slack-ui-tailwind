import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ icon }) => {
  return (
    <button className="w-8 h-8 inline-flex justify-center items-center hover:bg-gray-800 rounded">
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
