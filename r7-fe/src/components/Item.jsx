import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Item = () => {
  const location = useLocation();
  const { item } = location.state;

  const { setBasketItems } = useStateContext();

  return (
    <>
      <h1>{item?.name}</h1>
      <p>{item?.description}</p>
      <img src={item?.image} alt={item?.name} />
      <p>{item?.category}</p>
      <p>{item?.condition}</p>
      <p>{item?.delivery}</p>
      <button onClick={() => setBasketItems((prev) => [...prev, item])}>
        Add to basket
      </button>
    </>
  );
};

export default Item;
