import React, { useState } from "react";
import Logo from "../assets/logo/dark.png";
import "../styles/nav.css";

function Navbar() {
  const [links,setLinks] = useState([
    {
            name: "Research",
            to: "/research",
            drop: [],
          },
          {
            name: "Publication",
            to: "/publication",
            drop: [],
          },
          {
            name: "Facility",
            to: "/facility",
            drop: [],
          },
          {
            name: "Members",
            to: "/",
            drop: [{
              "name":"Phd Students",
              "link":"/phdstudents"
            },
            {
              "name":"Professors",
              "link":"/professor"
            },
          ],
          },
          {
            name: "Cultural activity",
            to: "/culturalactivity",
            drop: [],
          },
  ]);

  
return (
    <React.Fragment>
        <nav class="navbar navbar-expand-md bg-light navbar-light shadow-sm flex-column">
        <div className="navbar-brand w-100 d-flex align-items-center justify-content-between">
            <a class="navbar-brand" href="/"> 
                <img src={Logo} alt="" height="100px"/>
            </a>
            <a href="/login">
            <button class="btn btn-primary my-2 my-sm-0">login</button></a>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <i class="navbar-toggler-icon"/>
        </button>
  
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
        {}
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      {links.map((link, index) => (
          <div key={index+1}>
           {link.drop.length === 0 ?
            
            <li class="nav-item" >
            <a class="nav-link"  href={link.to}>{link.name}</a>
        </li>
        :
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href={link.to} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {link.name}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/professor">Professors</a>
          <a class="dropdown-item" href="/phd">Phd Students</a>
          <a class="dropdown-item" href="/masters">Masters Students</a>
          <a class="dropdown-item" href="/bachelors">Bachelor Students</a>
          <a class="dropdown-item" href="/interns">Interns</a>
        </div>
      </li>
      }
          
          </div>
           ))}
    </ul>
  </div>
  
</nav>
    </React.Fragment>
  )
}

export default Navbar;