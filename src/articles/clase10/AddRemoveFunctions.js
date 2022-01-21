/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

function AddRemoveFunctions() {
  const initialCart = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 5,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 1,
    },
  ];

  const items = {
    id: 1,
    name: 'Product 1',
    price: 10,
    quantity: 1,
  };
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    console.log(`Items dentro de "cart":`);
    console.log(cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  function isInCart(id) {
    return cart.find((item) => item.id === id);
  }

  function addItem(item) {
    setCart([...cart, item]);
  }

  function addToCart(item) {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          console.log(cartItem);
          // eslint-disable-next-line no-param-reassign
          cartItem.quantity += item.quantity;
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      addItem(item);
    }
  }

  return (
    <div>
      <div>
        En este ejemplo, podrán ver como implementar funciones para agregar
        items a un carrito (controlando si hay duplicados y dejando solo un
        registro por id). Partimos con un cart con algunos productos cargados:
      </div>
      <br />
      <button
        onClick={() => {
          console.log(initialCart);
        }}
      >
        console.log de initialCart
      </button>
      <br />
      <br />
      <div>
        También tenemos items, que son los que queremos agregar a nuestro
        carrito:
      </div>
      <br />
      <button onClick={() => console.log(items)}>console.log de items</button>
      <br />
      <br />
      <div>
        Primero vamos a desarrollar una función isInCart que controle si el id
        que queremos agregar está o no en el carrito.
        <br /> <br />
        <button
          onClick={() => {
            console.log(isInCart(items.id));
          }}
        >
          console.log de isInCart(items.id)
        </button>
        <br /> <br />
        <div>
          Luego desarrollamos una función para agregar algo de nuestro cart,
          esta va a ser SOLO DE AGREGAR, luego integraremos addItem e isInCart
          en otra función que se llame addToCart para que no haya duplicados
          (podría hacerlo todo junto pero queda mucho mas legible por separado).
        </div>
        <br />
        <button
          onClick={() => {
            addItem(items);
          }}
        >
          addItem(items)
        </button>
        <br />
        <br />
        <div>
          Y finalmente desarrollamos la función addToCart, la cual mapea el
          carrito y modifica la cantidad en caso de que isInCart tenga un valor
          diferente a false.
        </div>
        <br />
        <button onClick={() => addToCart(items)}>addToCart(items)</button>
      </div>
    </div>
  );
}

export default AddRemoveFunctions;
