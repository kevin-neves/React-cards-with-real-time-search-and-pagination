import P from 'prop-types';
import React from 'react';
import './styles.css';

export const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      type="search"
      value={searchValue}
      onChange={handleChange}
      placeholder="Type your search"
    />
  );
};

SearchInput.default = {
  searchValue: '',
};

SearchInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired,
};
