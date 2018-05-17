import React from 'react';
import { Hits, SearchBox, RefinementList } from 'react-instantsearch/dom';
import Product from './Product';

const Search = () => {
  return (
    <div className="container">
      <SearchBox />
      <RefinementList attribute="categories.lvl0" />
      <Hits hitComponent={Product}/>
    </div>
  );
}

export default Search;
