import React, { useState } from "react";

function Item({ name, category }) {

  const [item, itemSetter] = useState(false)
  const cartText = item ? "Remove from cart" : "Add to Cart";
  const itemClass = item ? "in-cart" : "";

  function clickHandler() {
    itemSetter(!item)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickHandler}>{cartText}</button>
    </li>
  );
}

export default Item;
