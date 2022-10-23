import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Item = () => {
  const location = useLocation();
  const { item } = location.state;

  const { setBasketItems } = useStateContext();

  const alertText = `Do you really need this item?
  
Remember you will need to store it until you are finished with it and then manage its disposal or re-gifting!`

  return (
    <>
      <h1>{item?.name}</h1>
      <p>{item?.description}</p>
      <img src={item?.image} alt={item?.name} />
      <p>{item?.category}</p>
      <p>{item?.condition}</p>
      <p>{item?.delivery}</p>
      <button onClick={() => {
      window.confirm(alertText) ? setBasketItems((prev) => [...prev, item]) : setBasketItems((prev) => [...prev]) }}>
        Add to basket
      </button>
    </>
  );
};

export default Item;
