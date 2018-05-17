import React from 'react';
import {
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  CurrentRefinements,
  ClearRefinements
} from 'react-instantsearch/dom';
import Product from './Product';

const Search = () => {
  return (
    <div className="container">
      <CurrentRefinements />
      <ClearRefinements />
      <SearchBox />
      <RefinementList attribute="categories.lvl0" />
      <Hits hitComponent={Product}/>
      <Pagination />
    </div>
  );
}

export default Search;
