import React from 'react';
import classes from './Error.module.css'
// Package Imports
import PacmanLoader from "react-spinners/PacmanLoader";

const Error = () => {
  return (
    <div className={classes.error}>
      <h2 className={classes.header}>Gathering Your Intergalactic Images...</h2>
      <PacmanLoader color='#014c3e' />
    </div>
  );
};

export default Error;