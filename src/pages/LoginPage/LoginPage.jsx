import React, {useState} from "react";
import styles from "./LoginPage.module.scss";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

// Icons
import Google from "../../assets/icons/google.svg"
import userIcon from "../../assets/icons/user.svg"
import key from "../../assets/icons/key.svg"


const LoginPage = (props) => {
  const {signIn, setUser} = props;

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const auth = getAuth();

const createUser = () => { 
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


const signInWithEAndP = () => {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
  return (
    <>
    <div className={styles.accountSetUp}>
    <h2>Create Account</h2>
    <div>
      <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
    </div>
    <div>
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
  </div>
  <button onClick={() => createUser()}>Create Account</button>



<h2>Sign In</h2>
<div>  
<img src={userIcon} alt="" />

  <input type="email" onChange={e => setEmail(e.target.value)}/>
</div>
<div> 
<img src={key} alt="" />

   <input type="password" onChange={e => setPassword(e.target.value)} />
</div>
  <button onClick={() => signInWithEAndP()}>Sign In</button>

  <h2>Sign in with</h2>

  {/* <p>Google:</p><button  >Log in</button> */}
  <img src={Google} alt="Google Sign In" onClick={() => signIn()}/><h3>Sign In with Google</h3>

    </div>

    </>
  );
};

export default LoginPage;
