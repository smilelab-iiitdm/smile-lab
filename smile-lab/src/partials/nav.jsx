import React from "react";
import Logo from "../assets/logo/dark.png";
import "../styles/nav.css";

function Navbar() { 
return (
    <React.Fragment>
        <nav class="navbar navbar-expand-md bg-light navbar-light shadow-sm flex-column">
        <div className="navbar-brand w-100 d-flex align-items-center justify-content-between">
            <a class="navbar-brand" href="/"> 
                <img src={Logo} alt="" height="100px"/>
            </a>
            <a href="/login">
            <button class="btn btn-primary my-2 my-sm-0">login</button></a>

            <a href="/logout">
            <button class="btn btn-primary my-2 my-sm-0">logout</button></a>
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
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Research
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/Research/topics">Topics</a>
          <a class="dropdown-item" href="/Research/projects">Projects</a>
          <a class="dropdown-item" href="/Research/news">News and Awards</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Publication
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/Publications/highlights">Publication Highlights</a>
          <a class="dropdown-item" href="/Publications/journals">Journals</a>
          <a class="dropdown-item" href="/Publications/conference">Conference</a>
          <a class="dropdown-item" href="/Publications/patents">Patents</a>
          <a class="dropdown-item" href="/Publications/new">Add Publication</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/facility">Facility</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Members
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/Members/professor">Professors</a>
          <a class="dropdown-item" href="/Members/phd">Phd Students</a>
          <a class="dropdown-item" href="/Members/masters">Masters Students</a>
          <a class="dropdown-item" href="/Members/bachelors">Bachelor Students</a>
          <a class="dropdown-item" href="/Members/interns">Interns</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/culturalactivity">Cultural Activity</a>
      </li>
      </ul>
      </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;