import React, { useEffect, useState } from 'react';
import classes from './image.module.css'
// Package Imports
import PropTypes from 'prop-types';
import { HeartIcon } from '@heroicons/react/outline'

const Image = ({ title, url, date }) => {
  const [liked, setLiked] = useState(false);
  const [show, setShow] = useState(false);

  // Hide like button until first animation runs
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [])

  const handleLike = () => {
    setLiked(!liked);
  }
  return (
    <article className={classes.card}>
      <h2 className={classes.title}> Spacestagram </h2>
      <img className={classes.image} src={url} alt='Space Image' />
      <p className={classes.content}>{title}</p>
      <p className={classes.content}>{date}</p>
      <HeartIcon className={liked ? classes.liked : classes.like} onClick={handleLike} style={{ visibility: show ? 'visible' : 'hidden' }} />
    </article>
  );
};

Image.proptypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Image;