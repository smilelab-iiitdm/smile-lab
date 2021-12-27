import React,{ useState } from "react";
import ReactLoader from "../partials/Loading";

function CardInfo({content}) {

  const [isLoading, setIsLoading] = useState(false);

  return(

    <React.Fragment>
    <div className="container-fluid my-5 px-5 page-fade">
      <div className="mt-5">
        {isLoading ? (
          <ReactLoader content="Loading Publications..." />
        ) : (
          content.map((publication, index) => (
            <div
              className="col-sm-12 my-3 w-100 border-0 shadow-sm card text-left page-fade"
              key={index + 1}
            >
              <div className="card-body">
                <h4 className="card-title">{publication.title}</h4>
                <h5 className="mb-2 text-muted card-subtitle">
                  {"     "} <em>{publication.authors}</em>
                </h5>

              <p className="card-text">
                <em className="pr-2">{publication.desc}</em>{" "}
                <span className="border-left border-primary pl-2">
                  {publication.category}
                </span>
              </p>
                <div className="w-100">
                  {publication.volume && (
                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-book pr-2 pb-0" /> <em>Volume: </em>
                      <span className="text-primary">{publication.volume}</span>
                    </p>
                  )}
                  {publication.pages && (
                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-book-open pr-2 pb-0" />
                      <em>Pages: </em>
                      <span className="text-primary"> {publication.pages}</span>
                    </p>
                  )}
                  <p className="card-text mr-4 d-inline-block">
                    <i className="fas fa-calendar-alt pr-2 pb-0" />
                    <em>Year: </em>
                    <span className="text-primary"> {publication.year}</span>
                  </p>
                </div>
                <div className="mt-2">
                  <a className="card-text" href={'https://doi.org/'+ publication.doi} target="blank">
                    {publication.doi}
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </React.Fragment>

  )
}

export default CardInfo;
