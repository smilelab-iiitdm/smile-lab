import React,{createContext,useReducer} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

//Publication Pages
import Publication from "./pages/publications/Publication";
import addPubs from "./pages/publications/Addpublication";
import Highlights from "./pages/publications/highlights";
import Journals from "./pages/publications/journals";
import Conference from "./pages/publications/conference";
import Patents from "./pages/publications/patents";

//Research Pages
import Research from "./pages/research/Research";
import Topics from "./pages/research/topics";
import Projects from "./pages/research/projects";
import News from "./pages/research/news";

//Members Pages
import ProMember from "./pages/members/promember";
import PhdMember from "./pages/members/phdmembers";
import MasMember from "./pages/members/masmember";
import Bachelor from "./pages/members/bachelors";
import Intern from "./pages/members/interns";

import Facility from "./pages/Facility";
import Navbar from "./partials/nav";
import Footer from "./partials/Footer";

import Cultural from "./pages/Cultural";

import Login from "./pages/Login";
import "./styles/style.css";

export const UserContext = createContext();

const initialState = false;
const reducer = (state,action) =>{
  if(action.type ==="USER") {
    return action.payload;
}

return state;
} 



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  return (
    <React.Fragment>
      <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        < Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />

          {/* Publication related pages */}
          <Route path="/Publications" exact component={Publication} />
          <Route path="/Publications/new" exact component={addPubs} />
          <Route path="/Publications/highlights" exact component={Highlights} />
          <Route path="/Publications/journals" exact component={Journals} />
          <Route path="/Publications/conference" exact component={Conference} />
          <Route path="/Publications/patents" exact component={Patents} />

          {/* Members related pages */}
          <Route path="/Members/professor" exact component={ProMember} />
          <Route path="/Members/phd" exact component={PhdMember} />
          <Route path="/Members/masters" exact component={MasMember} />
          <Route path="/Members/bachelors" exact component={Bachelor} />
          <Route path="/Members/interns" exact component={Intern} />

          {/* Research related pages */}
          <Route path="/Research" exact component={Research} />
          <Route path="/Research/topics" exact component={Topics} />
          <Route path="/Research/projects" exact component={Projects} />
          <Route path="/Research/news" exact component={News} />
          

          <Route path="/facility" exact component={Facility} />
          <Route path="/culturalactivity" exact component={Cultural} />
          
          <Route path="/login" exact component = {Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
      </UserContext.Provider>
    </React.Fragment>
  );
};

export default App;