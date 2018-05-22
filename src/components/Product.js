import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch/dom';

const Product = ({ hit }) => {

  const productStyle = {
    marginTop: '10px'
  }

  const imageStyle = {
    width:'100%',
    height:'100%'
  }

  return (
    <div style={productStyle} className="row">
      <div className="col-md-3">
        <img src={hit.image} style={imageStyle} alt={hit.name}/>
      </div>
      <div className="col-md-9">
        <Highlight attribute="name" hit={hit} />
        | <Snippet attribute="description" hit={hit} />
        | <Highlight attribute="price" hit={hit} />
      </div>
    </div>
  );
}

export default Product;
