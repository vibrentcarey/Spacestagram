import React from 'react';
import classes from './Header.module.css'
// Package Imports
import { MoonIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className={classes.header}>
      <MoonIcon className={classes.icon} />
      <h1 className={classes.title}> Spacestagram</h1>
    </header>
  );
};

export default Header;