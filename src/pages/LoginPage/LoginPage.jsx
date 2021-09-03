import React, {useState} from "react";
import styles from "./LoginPage.module.scss";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

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
// console.log(email);
// console.log(password);

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
  <label>Email</label>

  <h2>Create email sign in</h2>
    <input type="email" onChange={e => setEmail(e.target.value)}/>
    <label>Password</label>
    <input type="password" onChange={e => setPassword(e.target.value)}></input>
    <button onClick={() => createUser()}>email create user</button>

  <h2>Sign IN</h2>

    <input type="email" onChange={e => setEmail(e.target.value)}/>
    <label>Password</label>
    <input type="password" onChange={e => setPassword(e.target.value)} />
    <button onClick={() => signInWithEAndP()}>sign</button>

  <p>Google:</p><button onClick={() => signIn()} >Log in</button>
    </>
  );
};

export default LoginPage;
