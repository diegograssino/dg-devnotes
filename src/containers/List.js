import React from 'react';
import Item from 'containers/Item';
const List = props => {
  // Este es el List y se va a ocupar de recibir por props la data desde el container para renderizarla en pantalla iterando por cada registro que exista.
  return (
    <div>
      {props.data.map(item => (
        <Item key={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default List;
