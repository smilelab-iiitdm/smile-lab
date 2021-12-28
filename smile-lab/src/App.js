import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Publication from "./pages/Publication";
import Research from "./pages/Research";
import Facility from "./pages/Facility";
import Navbar from "./partials/nav";
import Footer from "./partials/Footer";
import ProMember from "./pages/promember";
import PhdMember from "./pages/phdmembers";
import Cultural from "./pages/Cultural";
import MasMember from "./pages/masmember";
import Bachelor from "./pages/bachelors";
import Intern from "./pages/interns";
import addPubs from "./pages/Addpublication";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        < Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Publication" exact component={Publication} />
          <Route path="/Research" exact component={Research} />
          <Route path="/facility" exact component={Facility} />
          <Route path="/culturalactivity" exact component={Cultural} />
          <Route path="/professor" exact component={ProMember} />
          <Route path="/phd" exact component={PhdMember} />
          <Route path="/masters" exact component={MasMember} />
          <Route path="/bachelors" exact component={Bachelor} />
          <Route path="/interns" exact component={Intern} />
          <Route path="/addpub" exact component={addPubs} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;