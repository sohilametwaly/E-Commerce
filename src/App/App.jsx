import style from "./App.module.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import logo from "../images/MSPLogo.svg";
import bag from "../images/bag.jpg";
import camera from "../images/camera.jpg";
import chairs from "../images/chairs.jpg";
import coffeeCups from "../images/coffeeCups.jpg";
import curtains from "../images/curtain.jpg";
import cushion from "../images/cushion.jpg";
import dress from "../images/dress.jpg";
import gloves from "../images/gloves.jpg";
import hat from "../images/hat.jpg";
import lamp from "../images/lamp.jpg";
import pants from "../images/pants.jpg";
import shoes from "../images/shoes.jpg";
import sunglasses from "../images/sunglasses.jpg";
import towel from "../images/towel.jpg";
import tShirt from "../images/t-shirts.jpg";
import { useRef, useState } from "react";

function Main() {
  const material = [
    {
      name: "Cushion",
      img: cushion,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Chairs",
      img: chairs,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Sunglasses",
      img: sunglasses,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Hat",
      img: hat,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Coffee Cups",
      img: coffeeCups,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Lamp",
      img: lamp,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Pants",
      img: pants,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "shoes",
      img: shoes,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Dress",
      img: dress,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Bag",
      img: bag,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Camera",
      img: camera,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Curtain",
      img: curtains,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "Gloves",
      img: gloves,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 80) + 10,
    },
    {
      name: "Towel",
      img: towel,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
    {
      name: "T-Shirt",
      img: tShirt,
      price: Math.floor(Math.random() * 900) + 100,
      off: Math.floor(Math.random() * 90) + 10,
    },
  ];

  const [products, setProducts] = useState(material);
  const [cartProducts, setCartProducts] = useState([]);
  // const [removedItem, setRemovedItem] = useState({});
  // const sendProd = (prod) => {
  //   setProducts([...products, prod]);
  // };

  const handleRemovedItem = (item) => {
    // setRemovedItem(item);
    setCartProducts(cartProducts.filter((p) => p != item));
    setProducts([item, ...products]);
  };

  const handleAdd = (product) => {
    setProducts(products.filter((p) => p != product));
    setCartProducts([...cartProducts, product]);
  };

  return (
    <div className={style.main}>
      <nav>
        <img src={logo} alt="" />
        <h1>msp e-commerce</h1>
      </nav>
      <section className={style.products}>
        <div>
          <Product handleAdd={handleAdd} products={products} />
        </div>
      </section>
      <section className={style.cart}>
        <Cart
          handleRemovedItem={handleRemovedItem}
          cartProducts={cartProducts}
        />
      </section>
    </div>
  );
}

export default Main;
