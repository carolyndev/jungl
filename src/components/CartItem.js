import React from 'react';

const CartItem = (props) => {
  const { item, cartItems, setCartItems } = props;

  const subtractOne = (e) => {
    if (item.quantity == 1) {
      return;
    }

    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: item.quantity - 1,
          };
        }
        return cartItem;
      })
    );
  };

  const addOne = (e) => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: item.quantity + 1,
          };
        }
        return cartItem;
      })
    );
  };

  // setTodos(todos.filter((el) => el.id !== todo.id));
  const removeItem = (e) => {
    setCartItems(cartItems.filter((el) => el.id !== item.id));
  };

  return (
    <div className="cart-item" key={item.id}>
      <img className="cart-item-image" src={item.url} alt={item.name} />

      <div className="cart-item-info">
        <div className="cart-item-details">
          <h3>
            {item.name} <span>${item.unitPrice * item.quantity}</span>
          </h3>

          <div className="cart-item-color">
            <p>{item.color}</p>
          </div>
        </div>

        <div className="cart-item-actions">
          <div className="cart-item-quantity">
            <button onClick={subtractOne}>-</button>
            <p>{item.quantity}</p>
            <button onClick={addOne}>+</button>
          </div>

          <div className="cart-item-remove">
            <button onClick={removeItem}>remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
