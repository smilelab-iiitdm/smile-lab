import React, { Component, useState, useEffect } from "react";
import Title from "../partials/Title";
import ReactLoader from "../partials/Loading";
import Members from "../partials/peoplepages";

class Intern extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interns: [],
      DataisLoaded: false
    };
  }
componentDidMount() {
  // axios.get('http://localhost:5000/publications/')
  fetch("http://localhost:5000/interns/")
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        interns: json,
        DataisLoaded: true
      });
    })
    }


render () 
{
  const {DataisLoaded, interns} = this.state;
  if(!DataisLoaded) return <ReactLoader content="Loading Interns" />;
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Interns">
        </Title>
        <Members members={interns}/>
      </div>
    </React.Fragment>
  );
}

}



export default Intern;
