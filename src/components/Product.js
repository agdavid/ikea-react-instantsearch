import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch/dom';

const Product = ({ hit }) => {

  const productStyle = {
    marginTop: '10px'
  }

  return (
    <div style={productStyle}>
      <span>
        <Highlight attribute="name" hit={hit} />
        | <Snippet attribute="description" hit={hit} />
        | <Highlight attribute="price" hit={hit} />
      </span>
    </div>
  );
}

export default Product;
