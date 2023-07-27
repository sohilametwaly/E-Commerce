import style from "./Cart.module.css";
import React, { useState } from "react";

function Cart({ handleRemovedItem, cartProducts }) {
  const price = cartProducts.map((p) => p.price);
  return (
    <div className={style.main}>
      <i class="fa-solid fa-cart-shopping">
        <p className={style.numItems}>{cartProducts.length}</p>
      </i>
      <div className={style.items}>
        <div>
          {cartProducts.map((prod) => {
            return (
              <div className={style.card}>
                <img src={prod.img} />
                <div>
                  <p className={style.name}>{prod.name}</p>
                  <p className={style.price}>
                    <span>EGP</span>
                    {prod.price}
                  </p>
                  <p className={style.off}>
                    <span>{Math.floor(prod.price * (prod.off / 100))}</span>
                    {prod.off}%
                  </p>
                </div>

                <button
                  className={style.remove}
                  onClick={() => {
                    handleRemovedItem(prod);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.total}>
        <h1>total price:</h1>
        <sub>EGB</sub>
        <p>{price.length > 0 ? price.reduce((acc, p) => acc + p) : 0}</p>
      </div>
    </div>
  );
}

export default Cart;
