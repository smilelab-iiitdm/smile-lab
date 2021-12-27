import React, { Component,useState, useEffect } from "react";
import Title from "../partials/Title";
import ReactLoader from "../partials/Loading";
import Members from "../partials/peoplepages";

class Bachelor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bachelors: [],
      DataisLoaded: false
    };
  }
componentDidMount() {
  // axios.get('http://localhost:5000/publications/')
  fetch("http://localhost:5000/undergraduates/")
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        bachelors: json,
        DataisLoaded: true
      });
    })
    }


render () 
{
  const {DataisLoaded, bachelors} = this.state;
  if(!DataisLoaded) return <ReactLoader content="Loading Bachelors" />;
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Undergraduate Students">
        </Title>
          <Members members={bachelors}/>
      </div>
    </React.Fragment>
  );
}

}

export default Bachelor;
