import React from "react";

const Title = ({ title, children }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <h1 className="title">{title}</h1>
        {children}
      </div>
      <hr className="mt-2" />
    </React.Fragment>
  );
};

export default Title;
