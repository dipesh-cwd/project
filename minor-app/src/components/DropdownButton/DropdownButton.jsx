import { forwardRef } from "react";


import "./DropdownButton.css";

const DropdownButton = forwardRef((props, ref) => {
  const { children, toggle, open } = props;

  return (
    <div
      onClick={toggle}
      className={`dropdown-btn ${open ? "button-open" : null}`}
      ref={ref}
    >
      {children}
      <span className="toggle-icon">
         {(open ?<i className="fa-solid fa-angle-up"></i> :<i className="fa-solid fa-angle-down"></i>)} 
      </span>
    </div>
  );
});

export default DropdownButton;
