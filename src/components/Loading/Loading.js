import React from 'react';
import classes from './Loading.module.css'
// Package Imports
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <div className={classes.error}>
      <h2 className={classes.header}>Gathering Your Intergalactic Images...</h2>
      <p className={classes.message}>If this is taking too long please try refreshing the page.</p>
      <p className={classes.message}>We don't want PacMac to get a stomachache! 🌝</p>
      <PacmanLoader color='#014c3e' />
    </div>
  );
};

export default Loading;