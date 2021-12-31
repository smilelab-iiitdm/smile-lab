import React,{ useState } from "react";
import ReactLoader from "../partials/Loading";
import Title from "../partials/Title";

const CardInfo = ({content}) =>{
  const [isLoading,setLoading]=useState(false);

  return(
    <React.Fragment>
    <div className="container-fluid my-5 px-5 page-fade">
      <div className="mt-5">
        {
          content.map((p, index) => (
            <div className="col-sm-12 my-3 w-100 border-0 shadow-sm card text-left page-fade" key={index + 1}>

              <div className="card-body">
              <h4 className="card-title">{p.title}</h4>
              <h5 className="mb-2 text-muted card-subtitle">
                {"     "} <em>{p.authors}</em>
              </h5>
              <p className="card-text">
              <em className="pr-2">{p.desc}</em>{" "}
              <span className="border-left border-primary pl-2">
                {p.category}
              </span>
              </p>

              <div className="w-100">
                 {p.volume && (
                   <p className="card-text mr-4 d-inline-block">
                     <i className="fas fa-book pr-2 pb-0" /> <em>Volume: </em>
                     <span className="text-primary">{p.volume}</span>
                   </p>
                 )}
                 {p.pages && (
                   <p className="card-text mr-4 d-inline-block">
                     <i className="fas fa-book-open pr-2 pb-0" />
                     <em>Pages: </em>
                     <span className="text-primary"> {p.pages}</span>
                   </p>
                 )}
                 <p className="card-text mr-4 d-inline-block">
                   <i className="fas fa-calendar-alt pr-2 pb-0" />
                   <em>Year: </em>
                   <span className="text-primary"> {p.year}</span>
                 </p>
              </div>
                
              <div className="mt-2">
                <a className="card-text" href={'https://doi.org/'+ p.doi} target="blank">
                  {p.doi}
                </a>
              </div>
              </div>

          </div>
          ))
        }
      <br></br>
      </div>
    </div>
  </React.Fragment>

  )
}

export default CardInfo;

  
    