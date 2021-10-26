import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import IconButton from "./IconButton";

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-start gap-x-2 text-white font-bold text-lg p-4 border-gray-500 border-b">
      <div className="flex gap-x-2 items-center rounded cursor-pointer hover:bg-gray-800">
        <div
          className={`w-8 h-8 inline-flex justify-center items-center relative`}
        >
          <img
            className="rounded"
            src={`https://i.pravatar.cc/64?u=${4}`}
            alt="Avatar"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-gray-900 border" />
        </div>
        <h1>Lesli Arson</h1>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="ml-auto inline-flex h-10 items-center">
        <IconButton icon={faPhone} />
      </div>
    </div>
  );
};

export default ChatHeader;
