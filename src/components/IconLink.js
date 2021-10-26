import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconLink = ({ icon, to, label, nested, withBg }) => {
  return (
    <Link
      to={to}
      className="flex gap-x-2 items-center px-4 py-1 hover:bg-black"
    >
      <span
        className={`w-6 h-6 inline-flex justify-center items-center ${
          nested && "ml-4"
        } ${withBg && "bg-gray-800 rounded"}`}
      >
        <FontAwesomeIcon icon={icon} />
      </span>
      {label}
    </Link>
  );
};

export default IconLink;
