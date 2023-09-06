import React, { useState, useEffect } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import "../../styles/research.css";

const Research = () => {
  const [researches, setResearches] = useState([
    {
      "title":"Self-powered wearable physiological signal from sustainable energy generation",
      "agency":"DST-INSPIRE",
      "role":"PI",
      "funds":"3500000",
      "years":"2018-2023"
    },
    {
      "title":"Hybridization of flexible thermoelectric and piezoelectric devices for energy harvesting",
      "agency":" DST-ASRT",
      "role":"PI",
      "funds":"1700000",
      "years":"2020-2022"
    },
    {
      "title":"Experimental study on complete thermoelectric performance of Ca-based CaBaTeSe",
      "agency":"Indian National Science Academy (INSA)",
      "role":"Mentor",
      "funds":"90000",
      "years":"2020-2021"
    },
    {
      "title":"Study on Influence of Nanostructured Titanium Dioxide Layer on its Thermal Properties",
      "agency":"AIRTF-DST",
      "role":"Mentor",
      "funds":"200000",
      "years":"2020-2020"
    },
    {
      "title":"Preparation and Characterization of Polyethylenimine Functionalized Reduced Graphene Oxide for Thermoelectric Applications",
      "agency":"AIRTF-DST",
      "role":"Mentor",
      "funds":"200000",
      "years":"2019-2020"
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Research Topics"></Title>
        <div class="container-fluid">
            <ul>
              <span class="topics"><li>ML/ AI materials for energy device applications</li></span>
              <span class="topics"><li>Physiological and Biosensors for Biomedical</li></span>
              <span class="topics"><li>Wearable Thermoelectric devices</li></span>
              <span class="topics"><li>Nanomaterials and smart fibres</li></span>
            </ul>
        </div>
        <Title title="Research Projects"></Title>
        <div className="mt-5">
          {isLoading ? (
            <ReactLoader content="Loading Research Projects..." />
          ) : (
            researches.map((research, index) => (
              <div
                className="col-sm-12 my-3 w-100 border-0 shadow-sm card text-left page-fade"
                key={index + 1}
              >
                <div className="card-body">
                  <h4 className="card-title">{research.title}</h4>
                  <h5 className="mb-2 text-muted card-subtitle">
                    Funding Agency: {"     "} <em>{research.agency}</em>
                  </h5>
                  <div className="w-100">
                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-user-tag pr-2 pb-0" />{" "}
                      <em>Role: </em>
                      <span className="text-primary">{research.role}</span>
                    </p>

                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-rupee-sign pr-2 pb-0" />
                      <em>Funds: </em>
                      <span className="text-primary"> {research.funds}</span>
                    </p>

                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-calendar-alt pr-2 pb-0" />
                      <em>Years: </em>
                      <span className="text-primary"> {research.years}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <br></br>
        <Title title="News and Awards"></Title>
        <br></br>
      </div>
    </React.Fragment>
  );
};

export default Research;
