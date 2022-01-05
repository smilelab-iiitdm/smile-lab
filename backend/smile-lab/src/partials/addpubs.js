import React from "react";
import "../styles/addpubs.css";

const addpubs = () => {

    return(
        <React.Fragment>
            <div className="container-fluid pt-2 pl-5 pr-5">
        <div class="inside-cont">
            <a href="/addpub" id="pubbut">
            <button class="btn btn-primary" id="submitbut">Add Publication</button>
            </a>
        </div>
            </div>
        </React.Fragment>
    )

}

export default addpubs;