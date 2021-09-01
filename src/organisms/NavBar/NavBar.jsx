import React from "react";
import styles from "./NavBar.module.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AboutUs from "../../pages/AboutUs";
// import BlogTest from "../../pages/BlogTest";
// import ContactUsTest from "../../pages/ContactUsTest";
// import Home from "../../pages/Home";

const NavBar = () => {
  return (
    <nav>

      <div>
        <Router>
          <Link exact to="/"> 
            <h1>Teacher Supply</h1>
          </Link>

          <Link to="/About">About Us</Link>
          <Link to="/Blog">blog test</Link>
          <Link to="/Contact">contact us</Link>
          </Router> 

           {/* <Switch>
            <Route exact path="/">
                <Home />
              </Route>
            <Route path="/aboutus">
               <AboutUs />
            </Route>
            <Route path="/blogtest">
               <BlogTest />
            </Route>
            <Route path="/contactustest">
                <ContactUsTest />
            </Route>
          </Switch> */}

      </div>

    </nav>
  );
};

export default NavBar;

