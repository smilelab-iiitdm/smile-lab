import React, { useState, useEffect } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import { BACKEND_URL } from "../../api";

const ProMember = () => {
  const [professors, setProfessors] = useState([]);
  const [DataisLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const url = `${BACKEND_URL}/members/professors/`;

    const fetchCon = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProfessors(json);
        setDataLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCon();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Professors"></Title>
        {!DataisLoaded ? (
          <ReactLoader content="Loading Members..." />
        ) : (
          professors.map((member, index) => (
            <div key={index + 1}>
              <div className="row">
                <div className="col-sm-2">
                  <img
                    src={"/people/" + member._id}
                    alt=""
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div className="col-sm-6 d-flex justify-content-between flex-column">
                  <h2>{member.name}</h2>
                  {/* <p>
                        <b>Role: {"    "}</b>
                        {member.desc}
                      </p> */}
                  <div>
                    <p className="mb-0">
                      <i className="fas fa-user-alt pr-3"></i>
                      {member.info}
                    </p>
                  </div>
                  <div>
                    <p className="mb-0">
                      <i className="fas fa-phone pr-3"></i>
                      {member.phone}
                    </p>
                  </div>
                  <div>
                    <p className="mb-0">
                      <i className="fas fa-envelope-open-text pr-3"></i>
                      {member.email}
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

export default ProMember;
