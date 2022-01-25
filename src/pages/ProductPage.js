import React, { useEffect } from 'react';
import { select, planterColors } from '../helpers/data';
import { ReactComponent as TreeIcon } from '../images/svgs/tree.svg';
import { ReactComponent as LowIcon } from '../images/svgs/low-light.svg';
import { ReactComponent as BrightIcon } from '../images/svgs/bright-light.svg';
import { ReactComponent as EasyIcon } from '../images/svgs/easy.svg';
import { ReactComponent as WindIcon } from '../images/svgs/wind.svg';
import { ReactComponent as PetIcon } from '../images/svgs/paw.svg';

const ProductPage = (props) => {
  const {
    guides,
    allProducts,
    selected,
    setSelected,
    itemToAdd,
    setItemToAdd,
    cartItems,
    setCartItems,
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(selected);
    setItemToAdd({
      name: selected.name,
      unitPrice: selected.price[0],
      color: 'stone',
      size: selected.sizes[0],
      quantity: 1,
      url: selected.url,
    });
  }, []);

  useEffect(() => {
    saveLocalCart();
  }, [cartItems]);

  const updateAddQuantity = (e) => {
    setItemToAdd({ ...itemToAdd, quantity: e.target.value });
  };

  const updateAddColor = (e) => {
    setItemToAdd({ ...itemToAdd, color: e.target.value });
  };

  const updateAddSize = (e) => {
    let priceIdx = selected.sizes.indexOf(e.target.value);
    setItemToAdd({
      ...itemToAdd,
      size: e.target.value,
      unitPrice: selected.price[priceIdx],
    });
  };

  const addToCard = () => {
    console.log(itemToAdd);
    setCartItems([...cartItems, itemToAdd]);
  };

  const saveLocalCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <div className="product-container">
      <div className="product-info">
        <img className="product-image" src={selected.url} alt={selected.name} />

        <div className="product-options">
          <h2 className="product-title">
            {selected.name}

            <span>${itemToAdd.unitPrice}</span>
          </h2>
          <h3 className="product-botanic">{selected.botanicalName}</h3>

          <div className="product-color" onChange={updateAddColor}>
            <h3>Planter Color</h3>
            <div className="color-option">
              {planterColors.map((color, idx) => (
                <label
                  htmlFor={'color-' + color}
                  className="color-label"
                  key={idx}
                >
                  {color === 'stone' ? (
                    <input
                      type="radio"
                      name="planter-color"
                      className="color-select"
                      id="color-stone"
                      value="stone"
                      defaultChecked="checked"
                    />
                  ) : (
                    <input
                      type="radio"
                      name="planter-color"
                      className="color-select"
                      id={'color-' + color}
                      value={color}
                    />
                  )}
                  <span className={'color-custom color-' + color}></span>
                  {color}
                </label>
              ))}
            </div>
          </div>

          <div className="product-size" onChange={updateAddSize}>
            <h3>Plant Size</h3>
            {selected.sizes &&
              selected.sizes.map((size, idx) => (
                <label
                  key={idx}
                  htmlFor={'size-' + size}
                  className="size-label"
                >
                  <input
                    type="radio"
                    name="planter-size"
                    className="size-select"
                    id={'size-' + size}
                    value={size}
                    defaultChecked={idx === 0 ? 'checked' : false}
                  />
                  {size}
                  <span className="size-custom"></span>
                </label>
              ))}
          </div>

          <div className="product-quantity" onChange={updateAddQuantity}>
            <select defaultValue={1}>
              {select.map((option, idx) => (
                <option value={option} key={idx}>
                  {option}
                </option>
              ))}
            </select>

            <button className="add-to-cart button-primary" onClick={addToCard}>
              ${itemToAdd.unitPrice * itemToAdd.quantity} - Add To Cart
            </button>
          </div>

          <div className="product-details">
            <h3>Details</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              amet assumenda dignissimos, maxime eum ad repellat.
            </p>
            <p>
              Unde voluptatum quas dicta reiciendis debitis ullam, repellendus
              dignissimos amet adipisci. Magni odit vitae quo, ullam, quidem
              fugit earum eum nesciunt velit iusto quasi harum labore. Amet in
              doloribus, assumenda suscipit voluptate dolorem maiores.
            </p>
          </div>

          <div className="product-care">
            <h3>Plant Care</h3>
            <ul>
              {selected.tags &&
                selected.tags.map((tag, idx) => (
                  <li key={idx}>
                    {tag === 'easy maintenance' && <EasyIcon />}
                    {tag === 'low light' && <LowIcon />}
                    {tag === 'bright indirect' && <BrightIcon />}
                    {tag === 'air-purifying' && <WindIcon />}
                    {tag === 'pet-friendly' && <PetIcon />}
                    {tag === 'tree' && <TreeIcon />}

                    <span>{tag}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
