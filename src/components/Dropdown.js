import React, { useState } from "react";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
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
        <IconButton
          onClick={() => setOpen(!open)}
          icon={open ? faCaretDown : faCaretRight}
        />
        {label}
        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all">
          {buttons}
        </div>
      </div>
      <div className={!open && `hidden`}>{children}</div>
    </>
  );
};

export default Dropdown;
