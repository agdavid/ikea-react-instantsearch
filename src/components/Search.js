import React from 'react';
import {
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  CurrentRefinements,
  ClearRefinements,
  Stats,
  Menu
} from 'react-instantsearch/dom';
import Product from './Product';

const Sidebar = () => {
  return (
    <div className="col-md-3">
      <h5>Category Refinement</h5>
      <RefinementList attribute="categories.lvl0" />
      <hr/>
      <h5>Color Menu</h5>
      <Menu attribute="colors" />
    </div>
  );
}

const Main = () => {
  return (
    <div className="col-md-9">
      <Stats />
      <SearchBox />
      <CurrentRefinements />
      <ClearRefinements />
      <Hits hitComponent={Product}/>
      <Pagination />
    </div>
  )
}

const Search = () => {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Search;
