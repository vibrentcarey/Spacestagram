import React from 'react';
import PropTypes from 'prop-types';
import classes from './image.module.css'

const Image = ({ title, url, date }) => {
  return (
    <article className={classes.card}>
      <h2>Spacestagram </h2>
      <img className={classes.image} src={url} alt='Space Image' />
    </article>
  );
};

Image.proptypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Image;