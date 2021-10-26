import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";

const DirectMessageLink = ({ to, label, online, nested, selected }) => {
  return (
    <Link
      to={to}
      className={`flex gap-x-2 items-center px-4 py-1 ${
        !selected && "hover:bg-black"
      } group ${selected && "bg-blue-600 text-white"}`}
    >
      <span
        className={`w-6 h-6 inline-flex justify-center items-center relative ${
          nested && "ml-4"
        }`}
      >
        <img
          className="rounded"
          src={`https://i.pravatar.cc/64?u=${v4()}`}
          alt="Avatar"
        />
        {online ? (
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-gray-900 border" />
        ) : (
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 inline-flex justify-center items-center rounded-full bg-gray-400 border-gray-900 border">
            <div className="h-1 w-1 bg-gray-900 rounded-full" />
          </div>
        )}
      </span>
      {label}
      <button className="ml-auto opacity-0 text-gray-600 hover:text-gray-400 group-hover:opacity-100">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </Link>
  );
};

export default DirectMessageLink;
