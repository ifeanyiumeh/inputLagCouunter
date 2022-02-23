import React from "react";

const DaCount = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.name} {props.increment}
    </button>
  );
};
export default DaCount;
