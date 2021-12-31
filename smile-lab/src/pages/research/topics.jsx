import React from "react";
import Title from "../../partials/Title";
import "../../styles/research.css";

const Topics = () => {
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
        </div>
    </React.Fragment>
  );
};

export default Topics;
