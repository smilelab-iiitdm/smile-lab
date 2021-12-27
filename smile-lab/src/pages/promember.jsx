import React, { Component, useState, useEffect } from "react";
import Title from "../partials/Title";
import ReactLoader from "../partials/Loading";


class ProMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      professors: [],
      DataisLoaded: false
    };
  }
componentDidMount() {
  // axios.get('http://localhost:5000/publications/')
  fetch("http://localhost:5000/professors/")
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        professors: json,
        DataisLoaded: true
      });
    })
    }


render () 
{
  const {DataisLoaded, professors} = this.state;
  if(!DataisLoaded) return <ReactLoader content="Loading Professors" />;
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Professors">
        </Title>
          {professors.map((member, index) => (
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
      }
      </div>
    </React.Fragment>
  );
}

}

export default ProMember;
