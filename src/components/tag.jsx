import React from "react";

const Tag = ({ getTag }) => {
  return (
    <div className="tag">
      <p className="tag__text">{getTag}</p>
    </div>
  );
};

export default Tag;
