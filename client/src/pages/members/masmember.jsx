import React, { useState, useEffect } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import Members from "../../partials/peoplepages";
import { BACKEND_URL } from "../../api";

const MasMember = () => {
  const [masters, setMasters] = useState([]);
  const [DataisLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const url = `${BACKEND_URL}/members/masters/`;

    const fetchCon = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setMasters(json);
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
        <Title title="Masters Students"></Title>
        {!DataisLoaded ? (
          <ReactLoader content="Loading Members..." />
        ) : (
          <Members members={masters} />
        )}
      </div>
    </React.Fragment>
  );
};

export default MasMember;
