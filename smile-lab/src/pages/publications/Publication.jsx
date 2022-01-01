import React, { Component } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import CardInfo from "../../partials/Cards";
import axios from "axios";
import {link} from "react-router-dom";
import Addpubbut from "../../partials/addpubs"; 


  class Publication extends Component {
    constructor(props) {
      super(props);

      this.state = {
        publications: [],
        DataisLoaded: false
      };
    }

    componentDidMount() {
      fetch("/api/publications/")
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            publications: json,
            DataisLoaded: true
          });
        })
        }


    render () 
    {
      const {DataisLoaded, publications} = this.state; 
      if(!DataisLoaded) return <div><h1>Data Loading..</h1></div>;
      return (
        <React.Fragment>
          <div className="container-fluid my-5 px-5 page-fade">
            <div>
              <Addpubbut />
            </div>
              <br>
              </br>
            {/* <Title title="Publications"></Title> */}
            <Title title="Publication Highlights"></Title>
            {!DataisLoaded ? (
              <ReactLoader content="Loading Publications" />
            ) : (
              <CardInfo content={publications}/>
            )}
          </div>
        </React.Fragment>
      );
    }

  }
  export default Publication;


