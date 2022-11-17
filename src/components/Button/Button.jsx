import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ text, сlickHandler }) => {
  return (
    <button className={css.Button} type="button" onClick={сlickHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  сlickHandler: PropTypes.func.isRequired,
};
