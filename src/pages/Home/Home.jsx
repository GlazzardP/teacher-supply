import React from "react";
import styles from "./Home.module.scss";

import {  Link } from "react-router-dom";

import ImgCard from "../../assets/images/card.jpeg";
import Clock from "../../assets/icons/clock.png";

import cooperation from "../../assets/icons/cooperation.png";
import piggybank from "../../assets/icons/piggy-bank.svg";
import support from "../../assets/icons/support.svg";


const Home = () => {
  return (
    <section className={styles.homepage}>

      <section>
            <div>
          <h2>The modern way to hire supply teachers.</h2>
          <p>Supply Teachers enables schools and teachers to take control of their work meaning better financial benefits for both.</p>
          <Link to='/Account'>Sign Up</Link>
      </div>



      <img src={ImgCard} />

      </section>


      <div className={styles.benefits}>
        <div>
          <img src={Clock} />
          <h3>Save time</h3>
          <p>Reduce time taken to find the right person.</p>
        </div>
        <div>
          <img src={cooperation} />
          <h3>Save time</h3>
          <p>Reduce time taken to find the right person.</p>
        </div>
        <div>
          <img src={piggybank} />
          <h3>Save time</h3>
          <p>Reduce time taken to find the right person.</p>
        </div>
                <div>
          <img src={support} />
          <h3>Save time</h3>
          <p>Reduce time taken to find the right person.</p>
        </div>
        <div>
          <img src={Clock} />
          <h3>Save time</h3>
          <p>Reduce time taken to find the right person.</p>
        </div>
      </div>


    </section>
  );
};

export default Home;
