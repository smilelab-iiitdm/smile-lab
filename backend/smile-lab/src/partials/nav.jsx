import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import Logo from "../assets/logo/dark.png";
// import "../styles/nav.css";
import {UserContext} from "../App";


function Navbar() {
  const {state,dispatch} = useContext(UserContext); 
return (
    <React.Fragment>
        <nav className="navbar navbar-expand-md bg-light navbar-light shadow-sm flex-column">
        <div className="navbar-brand w-100 d-flex align-items-center justify-content-between">
            <NavLink className="navbar-brand" to="/"> 
                <img src={Logo} alt="" height="120px"/>
            </NavLink>
            { !state ? 
            <NavLink to="/login">
            <button className="btn btn-primary my-2 my-sm-0">login</button></NavLink> 
            :  
            <NavLink to="/logout">
            <button className="btn btn-primary my-2 my-sm-0">logout</button></NavLink>}
            

            
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <i className="navbar-toggler-icon"/>
        </button>
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
        {}
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Research
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="/Research/topics">Topics</NavLink>
          <NavLink className="dropdown-item" to="/Research/projects">Projects</NavLink>
          <NavLink className="dropdown-item" to="/Research/news">News and Awards</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Publication
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="/Publications/highlights">Publication Highlights</NavLink>
          <NavLink className="dropdown-item" to="/Publications/journals">Journals</NavLink>
          <NavLink className="dropdown-item" to="/Publications/conference">Conference</NavLink>
          <NavLink className="dropdown-item" to="/Publications/patents">Patents</NavLink>
          { state ?
          <NavLink className="dropdown-item" to="/Publications/new">Add Publication</NavLink>
            :
          ""
          }
          </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/facility">Facility</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Members
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="/Members/professor">Professors</NavLink>
          <NavLink className="dropdown-item" to="/Members/phd">Phd Students</NavLink>
          <NavLink className="dropdown-item" to="/Members/masters">Masters Students</NavLink>
          <NavLink className="dropdown-item" to="/Members/bachelors">Bachelor Students</NavLink>
          <NavLink className="dropdown-item" to="/Members/interns">Interns</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/culturalactivity">Cultural Activity</NavLink>
      </li>
      </ul>
      </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;