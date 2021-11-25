import React from 'react';
import { string } from 'prop-types';
import styles from './App.module.css';
import ReactLogo from './assets/images/react-logo.svg';
import WebpackLogo from './assets/images/webpack-logo.svg';

const App = ({ text }) => {
  return (
    <div className={styles.title}>
      {`Welcome to ${text} application!`}
      <img src={ReactLogo} alt="React logo" />
      <img src={WebpackLogo} alt="Webpack logo" />
    </div>
  );
};

App.propTypes = {
  text: string.isRequired
};

export default App;
