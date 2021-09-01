import logo from './logo.svg';
import { useEffect, useState } from 'react';
import styles from './App.scss';
import { getAuth, signInWithRedirect, signOut, onAuthStateChanged  } from "firebase/auth";
import  { provider }  from "./firebase"

function App() {
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
      setUser(user)
      // User is signed in
      const uid = user.uid;
      // ...
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

console.log(user);


  return (
    <> 
    {userExistJsx()}
      <button onClick={() => signIn()} >Log in</button>
      <button onClick={() => logOut()} >Log Out</button>

    </>
  );
}

export default App;
