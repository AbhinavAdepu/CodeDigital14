import React from "react";
/**
 * @description Spinner
 * @function Spinner
 * @param {object} props - Any props value to this component
 * @returns {object} Spinner component
 * @author Abhinav Adepu
 */
const Spinner = props => {
  const { overlay, ...rest } = props;
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        flexDirection: "column",
        ...(overlay && {
          zIndex: 99,
          background: "rgba(0,0,0,0.12)"
        })
      }}
    >
      <div style={{ margin: "auto" }}>Loading....</div>
    </div>
  );
};

export default Spinner;
