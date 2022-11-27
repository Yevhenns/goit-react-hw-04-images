import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [query, setquery] = useState('');

  const handleNameChange = e => {
    setquery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Empty request');
      return;
    }
    onSubmit(query);
    setquery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button
          type="submit"
          className={css.SearchFormButton}
          onClick={handleSubmit}
        >
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          value={query}
          onChange={handleNameChange}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
