import React, { useState } from "react";
import Title from "../partials/Title";
import ReactLoader from "../partials/Loading";

const Facility = () => {
  const [facilities, setFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <React.Fragment>
      <div className="container-fluid bg-light px-5 mt-5 page-fade">
        <Title title="Facility" />
        {isLoading ? (
          <ReactLoader content="Loading Facilities..." />
        ) : (
          <div className="card-columns my-5 page-fade">
            {facilities.map((facilty, index) => (
              <div className="card border-0 shadow-sm" key={index + 1}>
                <div className="card-body">
                  <div className="card-img-top mx-auto">
                    <img
                      // src={`${link}/common/facility/${facilty._id}`}
                      src=""
                      alt=""
                      loading="eager"
                      height="300px"
                      width="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h4 className="card-title title mt-4">{facilty.name}</h4>
                  <p className="card-text">{facilty.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Facility;
