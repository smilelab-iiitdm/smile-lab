import React, { useState, useEffect } from "react";
import ReactLoader from "../partials/Loading";

const Members = ({members}) => {

  const [isLoading, setIsLoading] = useState(false);

return (
  <React.Fragment>
    <div className="container-fluid my-5 px-5">
      {isLoading ? (
        <ReactLoader content="Loading Member ..." />
      ) : (
        members.map((member, index) => (
          <div key={index + 1}>
            <div className="row">
              <div className="col-sm-3">
                <img
                  src={"/people/"+member._id}
                  alt=""
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </div>
              <div className="col-sm-6 d-flex justify-content-between flex-column">
                <h1 className="mb-4">{member.name}</h1>
                <p>
                  <b>Role: {"    "}</b>
                  {member.desc}
                </p>
                <p className="card-text">
                  <b>Research Interests: {"    "}</b>
                  {member.researchInterest}
                </p>
                <p className="card-text">
                  <b>Education: {"    "}</b>
                  {member.education}
                </p>
                <div>
                  <p className="mb-0">
                    <i className="fas fa-envelope-open-text pr-3"></i>
                    {member.email}
                  </p>
                </div>
                <div>
                  <p className="mb-0">
                    <i className="fas fa-envelope-open-text pr-3"></i>
                    {member.email2}
                  </p>
                </div>
              </div>
            </div>
            <div>
                <br></br>
            </div>
          </div>
        ))
      )}
    </div>
  </React.Fragment>
);
};

export default Members;
