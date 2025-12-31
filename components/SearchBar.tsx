
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onRandom: () => void;
  onToggleBookmarks: () => void;
  isLoading: boolean;
  bookmarkCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  onRandom, 
  onToggleBookmarks,
  isLoading, 
  bookmarkCount 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form" role="search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="search-input"
          aria-label="Search for a topic"
          disabled={isLoading}
        />
      </form>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={onRandom} className="nav-button" disabled={isLoading}>
          Random
        </button>
        <button onClick={onToggleBookmarks} className="nav-button" disabled={isLoading}>
          Bookmarks ({bookmarkCount})
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
