import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, onSearch }) => {
  const [searchValue, setSearchValue] = useState(searchTerm);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Поиск по имени..."
        value={searchValue}
        onChange={handleInputChange}
        className="rounded-full py-2 px-4 border border-red-500 focus:outline-none flex-grow"
        style={{ marginRight: '10px', minWidth: '0' }}
      />
      <button
        type="submit"
        className="bg-red-700 hover:bg-blue-600 text-white font-semibold rounded-full py-2 px-4 focus:outline-none"
        style={{ borderRadius: '25px' }}
      >
        Поиск
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
