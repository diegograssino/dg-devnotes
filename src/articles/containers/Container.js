import React from 'react';
import List from './List';

function Container() {
  // Este es el container y se va a ocupar de hacer llamadas a APIs o conseguir contener los datos que vamos a utilizar.

  const DATA = [
    {
      id: '1',
      name: 'Mango',
    },
    {
      id: '2',
      name: 'Apple',
    },
    {
      id: '3',
      name: 'Orange',
    },
  ];

  return (
    <div>
      <List data={DATA} />
    </div>
  );
}

export default Container;
