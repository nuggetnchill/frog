import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        height: "600px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
