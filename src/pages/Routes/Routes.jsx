import React from "react";
import styles from "./Routes.module.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUs from "../AboutUs";
import BlogTest from "../BlogTest";
import ContactUsTest from "../ContactUsTest";
import LoginPage from "../LoginPage";
import Home from "../Home";
import NavBar from "../../organisms/NavBar/NavBar";
import { getAuth, signInWithRedirect, signOut, onAuthStateChanged  } from "firebase/auth";
import  { provider }  from "../../firebase"
import { useEffect, useState } from 'react';


const Routes = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth();
  
  const signIn = () => { 
    signInWithRedirect(auth, provider);
  }
  
  const logOut = () => { 
    signOut(auth).then(setUser(null))
  }
  
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user)
        const uid = user.uid;
      } else {
        // User signs out
        setUser(null);
      }
    });
  }
  
  useEffect(() => { 
    getUser()
  }, [user])
  
  const userExistJsx = () => { 
    if(user){ 
    return (
      <p>User exists</p>
    )
  } else { 
    return (
      <p>No User</p>
    )
  }
  }
  return (
    <>
        <Router>
          <nav>
          <Link exact to="/"> 
            <h1>Teacher Supply</h1>
          </Link>
          {userExistJsx()}


        <div>
  {/* <button onClick={() => signIn()} >Log in</button> */}
  <button onClick={() => logOut()} >Log Out</button>
          <Link to="/About"><h2>About Us</h2></Link>
          <Link to="/Blog"><h2> blog test</h2></Link>
          <Link to="/Contact"><h2>contact us</h2> </Link>
          <Link to="/Account"><h2>Account</h2> </Link>


        </div>

          </nav>



    <Switch>
      <Route exact path="/">
         <Home />
      </Route>
      <Route path="/About">
      <AboutUs />
      </Route>
      <Route path="/Blog">
        <BlogTest />
      </Route>
      <Route path="/Contact">
        <ContactUsTest />
      </Route>
      <Route path="/Account">
        <LoginPage  signIn={signIn} />
      </Route>

    </Switch>
  </Router>
</>
  );
};

export default Routes;
