import React from 'react';
import { Highlight } from 'react-instantsearch/dom';

const Product = ({ hit }) => {

  const productStyle = {
    marginTop: '10px'
  }

  return (
    <div style={productStyle}>
      <span className="hit-name">
        <Highlight attribute="name" hit={hit} />
        | {hit.price}
      </span>
    </div>
  );
}

export default Product;
