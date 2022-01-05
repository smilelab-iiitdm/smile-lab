import React, { useState,useEffect } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import CardInfo from "../../partials/Cards";
// import Addpubbut from "../../partials/addpubs"; 

let journal=[];

function popper() {
    journal = [...new Map(journal.map((item)=>[item["_id"],item])).values()];
}

const Journals = () => {
    const [journals,setJournals] = useState([]);
    const [DataisLoaded,setDataLoaded] = useState(false);

    useEffect(() =>{
        const url = "/api/publications";

        const fetchCon = async() => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                setJournals(json);
                setDataLoaded(true);

            }catch(err) {
                console.log(err)
            }
        };

        fetchCon();
    },[]);

    const divisor = (publication) => {
        if(publication.category === "journal"){
          journal.unshift(publication);
        }
      }

        return (
            <React.Fragment>
            <div className="container-fluid my-5 px-5 page-fade">
            <Title title="Journals"></Title>
            <div className="mt-5">
            {!DataisLoaded ? (
            <ReactLoader content="Loading Publications..." />
                ) : (
                journals.map((publication, index) => (
                <div key ={index+1}>
                {divisor(publication)}
            </div>
          ))  
        )}
        {/* {console.log(journal)} */}
        {popper()}

        {journal.length?
        <CardInfo content={journal} />
        :
        <div>
        <br></br>
        <h2>No Journals Found</h2>
        <br></br>
        </div>
        }
        {/* {popper} */}
        </div>
        </div>
        </React.Fragment>
        )   
    }

export default Journals;

