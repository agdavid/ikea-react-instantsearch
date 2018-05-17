import React from 'react';

const Product = ({ hit }) => {
  return (
    <div>
      {hit.name} | {hit.price}
    </div>
  );
}

export default Product;
