import React, { useState,useEffect} from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import CardInfo from "../../partials/Cards";
// import Addpubbut from "../../partials/addpubs"; 
let conference = [];


function popper() {
    conference = [...new Map(conference.map((item)=>[item["_id"],item])).values()];
}

const Conference = () => {
    const [conferences,setConferences] = useState([]);
    const [DataisLoaded,setDataLoaded] = useState(false);

    useEffect(() =>{
        const url = "/api/publications";

        const fetchCon = async() => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                setConferences(json);
                setDataLoaded(true);

            }catch(err) {
                console.log(err)
            }
        };

        fetchCon();
    },[]);

    const divisor = (publication) => {
        if(publication.category === "conference"){
          conference.unshift(publication);
        }
      }

        return (
            <React.Fragment>
            <div className="container-fluid my-5 px-5 page-fade">
            <Title title="Conference"></Title>
            <div className="mt-5">
            {!DataisLoaded ? (
            <ReactLoader content="Loading Publications..." />
                ) : (
                conferences.map((publication, index) => (
                <div key ={index+1}>
                {divisor(publication)}
            </div>
          ))  
        )}
        {popper()}
        {conference.length?
        <CardInfo content={conference} />
        :
        <div>
        <br></br>
        <h2>No Conferences Found</h2>
        <br></br>
        </div> 
        }
        </div>
        </div>
        </React.Fragment>
        )   
    }

export default Conference;

