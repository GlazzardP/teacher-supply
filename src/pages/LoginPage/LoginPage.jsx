import React from "react";
import styles from "./LoginPage.module.scss";

// Icons
import Google from "../../assets/icons/Google.svg";

const LoginPage = (props) => {
  const {signIn} = props;
  return (
    <>
      <p>Google: </p>
        <button onClick={() => signIn()} >Log in</button>
      <img src={Google} />

    </>
  );
};

export default LoginPage;
