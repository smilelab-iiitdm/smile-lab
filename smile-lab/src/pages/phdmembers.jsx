import React, { Component, useState, useEffect } from "react";
import Title from "../partials/Title";
import ReactLoader from "../partials/Loading";
import Members from "../partials/peoplepages";

class PhdMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phds: [],
      DataisLoaded: false
    };
  }
componentDidMount() {
  // axios.get('http://localhost:5000/phds/')
  fetch("http://localhost:5000/phds/")
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        phds: json,
        DataisLoaded: true
      });
    })
    }


render () 
{
  const {DataisLoaded,phds} = this.state;
  if(!DataisLoaded) return <ReactLoader content="Loading Phd Students" />;
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Phd Students">
        </Title>
          <Members members={phds}/>
      </div>
    </React.Fragment>
  );
}

}

export default PhdMember;
