import React from 'react';
import { Hits } from 'react-instantsearch/dom';
import Product from './Product';

const Search = () => {
  return (
    <div className="container">
      <Hits hitComponent={Product}/>
    </div>
  );
}

export default Search;
