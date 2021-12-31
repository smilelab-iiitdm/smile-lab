import React, { useState,useEffect} from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import Members from "../../partials/peoplepages"; 

const Intern = () => {
    const [interns,setInterns] = useState([]);
    const [DataisLoaded,setDataLoaded] = useState(false);

    useEffect(() =>{
        const url = "http://localhost:5000/api/members/interns/";

        const fetchCon = async() => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                setInterns(json);
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
        <Title title="Interns"></Title>
        {!DataisLoaded ? (
        <ReactLoader content="Loading Members..." />
            ) : (
              <Members members={interns}/>
          )  
        }
        </div>
        </React.Fragment>
        )   
    }

export default Intern;

