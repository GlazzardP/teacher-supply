import React from "react";
import styles from "./AppPage.module.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import JobsFilled from "../../pages/JobsFilled"
import MySchoolFavourites from "../../pages/MySchoolFavourites";


const AppPage = () => {
  let { path, url } = useRouteMatch();

  return (
    <section className={styles.appPage}>
      <div className={styles.sideNav}>
          <Link to={`${url}/favourites`}><p>My Favourites</p></Link>
          <p>Messages</p>
          <p>Open Jobs</p>
          <Link to={`${url}/filled-jobs`}><p>Filled Jobs</p></Link>
          <p>My School</p>
      </div>


    <div>
    <Switch>
        {/* <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route> */}
        <Route exact path={`${path}/:favourites`}>
          <MySchoolFavourites />
        </Route>
        <Route exact path={`${path}/:filled-jobs`}>
          <JobsFilled />
        </Route>
      </Switch>

    </div>


 </section>
  );
};

export default AppPage;
