import React, { useState } from "react";
import style from "./Product.module.css";

function Product({ handleAdd, products }) {
  return (
    <>
      <div className={style.topHome}>
        <p>{products.length}</p>
        <h1>top home picks</h1>
      </div>
      <div className={style.products}>
        {products.map((prod, idx) => {
          return (
            <div key={idx} className={style.card}>
              <img src={prod.img} alt="" />
              <p className={style.name}>{prod.name}</p>
              <p className={style.price}>
                <span>EGP</span>
                {prod.price}
              </p>
              <p className={style.off}>
                <span>{Math.floor(prod.price * (prod.off / 100))}</span>{" "}
                {prod.off}%
              </p>
              <button
                className={style.add}
                onClick={() => {
                  handleAdd(prod);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
