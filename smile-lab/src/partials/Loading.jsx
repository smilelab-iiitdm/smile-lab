import React from "react";
import { Watch } from "react-loader-spinner";

const ReactLoader = ({ content }) => {
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center align-items-center flex-column w-100"
        style={{ height: "200px" }}
      >
        <Watch color="#2b00ff" height={100} width={100} />
        <p className="mt-5">{content}</p>
      </div>
    </React.Fragment>
  );
};

export default ReactLoader;
