import React, { useState,useEffect } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import Members from "../../partials/peoplepages"; 

const Bachelor = () => {
    const [bachelors,setBachelors] = useState([]);
    const [DataisLoaded,setDataLoaded] = useState(false);

    useEffect(() =>{
        const url = "/api/members/undergraduates/";

        const fetchCon = async() => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                setBachelors(json);
                setDataLoaded(true);

            }catch(err) {
                console.log(err)
            }
        };

        fetchCon();
    },[]);

      return (
        <React.Fragment>
        <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Undergraduates"></Title>
        {!DataisLoaded ? (
        <ReactLoader content="Loading Members..." />
            ) : (
              <Members members={bachelors}/>
          )  
        }
        </div>
        </React.Fragment>
        )   
    }

export default Bachelor;

