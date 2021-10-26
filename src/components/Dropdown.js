import React, { useState } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";

const Dropdown = ({ children, label, buttons, className }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div
        className={`flex gap-x-2 items-center px-4 py-1 group cursor-pointer${
          className && ` ${className}`
        }`}
      >
        <IconButton icon={faCaretDown} />
        {label}
        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all">
          {buttons}
        </div>
      </div>
      {open && children}
    </>
  );
};

export default Dropdown;
