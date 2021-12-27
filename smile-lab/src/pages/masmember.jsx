import React, { Component, useState, useEffect } from "react";
import Title from "../partials/Title";
import ReactLoader from "../partials/Loading";
import Members from "../partials/peoplepages";

class MasMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      masters: [],
      DataisLoaded: false
    };
  }
componentDidMount() {
  // axios.get('http://localhost:5000/publications/')
  fetch("http://localhost:5000/masters/")
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        masters: json,
        DataisLoaded: true
      });
    })
    }


render () 
{
  const {DataisLoaded, masters} = this.state;
  if(!DataisLoaded) return <ReactLoader content="Loading Masters Students" />;
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Masters Students">
        </Title>
          <Members members={masters}/>
      </div>
    </React.Fragment>
  );
}

}

export default MasMember;
