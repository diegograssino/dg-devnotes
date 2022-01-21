import React from 'react';

const Item = props => {
  // Este es el Item, y recibira por props cada registro individualmente.
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Item;
