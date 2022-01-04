import React, { useState,useEffect } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import CardInfo from "../../partials/Cards";
// import Addpubbut from "../../partials/addpubs"; 
let patent = [];

function popper() {
    patent = [...new Map(patent.map((item)=>[item["_id"],item])).values()];
}

const Patents = () => {
    const [patents,setPatents] = useState([]);
    const [DataisLoaded,setDataLoaded] = useState(false);

    useEffect(() =>{
        const url = "/api/publications";

        const fetchCon = async() => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                setPatents(json);
                setDataLoaded(true);

            }catch(err) {
                console.log(err)
            }
        };

        fetchCon();
    },[]);

    const divisor = (publication) => {
        if(publication.category === "patent"){
          patent.unshift(publication);
        }
      }

        return (
            <React.Fragment>
            <div className="container-fluid my-5 px-5 page-fade">
            <Title title="Patents"></Title>
            <div className="mt-5">
            {!DataisLoaded ? (
            <ReactLoader content="Loading Publications..." />
                ) : (
                patents.map((publication, index) => (
                <div key ={index+1}>
                {divisor(publication)}
            </div>
          ))  
        )}
        {popper()}
        {patent.length?
        <CardInfo content={patent} />
        :
        <div>
        <br></br>
        <h1>No Patents Found</h1>
        <br></br>
        </div>
        }
        </div>
        </div>
        </React.Fragment>
        )   
    }

export default Patents;

