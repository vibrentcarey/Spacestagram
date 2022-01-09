import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import classes from './Error.module.css'

const Error = () => {
  return (
    <div className={classes.error}>
      <h2 className={classes.header}>Gathering Your Intergalactic Images...</h2>
      <PacmanLoader color='#014c3e' />
    </div>
  );
};

export default Error;