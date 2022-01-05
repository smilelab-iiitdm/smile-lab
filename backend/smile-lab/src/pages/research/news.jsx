import React, { useState, useEffect } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import "../../styles/research.css";

const News = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        {/* <br></br> */}
        <Title title="News and Awards"></Title>
            <ReactLoader />
        <br></br>
      </div>
    </React.Fragment>
  );
};

export default News;
