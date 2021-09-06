import React from "react";
import styles from "./SideNav.module.scss";

import MySchoolFavourites from "../../pages/MySchoolFavourites";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch

} from "react-router-dom";
const SideNav = () => {
  let { path, url } = useRouteMatch();

  return (
    <section className={styles.sideNav}>
       <Router>
       <Link to={`${url}/favourites`}><p>My Favourites</p></Link>
        <p>Messages</p>
        <p>Open Jobs</p>
        <p>Job Filled</p>
        <p>My School</p>

        <Switch>
           <Route path="/School-Favourites">
             <MySchoolFavourites />
           </Route>   
         </Switch> 

       </Router>
    </section>

  );
};

export default SideNav;
