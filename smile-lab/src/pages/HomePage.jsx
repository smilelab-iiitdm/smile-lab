import React, { useEffect, useState } from "react";
import Carousel from "../partials/Carousel";
import CardInfo from "../partials/CardsHome";
import Title from "../partials/Title";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [about, setAbout] = useState("");
  const [publications,setPublications] = useState([]);

  useEffect(() =>{
    const url = "/api/publications";

    const fetchCon = async() => {
        try{
            const response = await fetch(url);
            const json = await response.json();
            setPublications(json);
        }catch(err) {
            console.log(err)
        }
    };

    fetchCon();
},[]);

  return (
    <React.Fragment>
      <div className="mt-2 page-fade">
        <Carousel />
      </div>

      <div className="container-fluid bg-light px-5 page-fade">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <Title title="About Us" />
            <p>{about}</p>
            <p>At the SMILE Laboratory, we design and make new nanomaterials that offers sustainable solutions for energy harvesting.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light px-5 page-fade">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <Title title="News" />
            <p>{about}</p>
          </div>
        </div>
      </div>
      
      <div className="container-fluid bg-light px-5 page-fade">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <Title title="Recent Publications" />
            <CardInfo content={publications.slice(0,5)} />
          </div>
        </div>

        

        <div className="text-center mt-3">
          <NavLink to="/publication">
            <button className="button">View More</button>
          </NavLink>
        </div>
        <div>
          <br></br>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
