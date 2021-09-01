import React from "react";
import styles from "./LoginPage.module.scss";

const LoginPage = (props) => {
  const {signIn} = props;
  return (
    <>
      <p>Google: </p>
        <button onClick={() => signIn()} >Log in</button>

    </>
  );
};

export default LoginPage;
