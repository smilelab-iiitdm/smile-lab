import React, { Component, useEffect, useState } from "react";
import Title from "../partials/Title";
import ReactLoader from "../partials/Loading";
import CardInfo from "../partials/Cards";
import axios from "axios";
import {link} from "react-router-dom";

  class Publication extends Component {
    constructor(props) {
      super(props);

      this.state = {
        publications: [],
        DataisLoaded: false
      };
    }

    componentDidMount() {
      // axios.get('http://localhost:5000/publications/')
      fetch("http://localhost:5000/publications/")
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
            <Title title="Publications">
            </Title>
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


