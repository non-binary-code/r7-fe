import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Basket = () => {
  const { basketItems } = useStateContext();
  return (
    <div>
      {basketItems?.map((item) => (
        <div>
          <h1>{item?.name}</h1>
          <p>{item?.description}</p>
          <img src={item?.image} alt={item?.name} />
          <p>{item?.category}</p>
          <p>{item?.condition}</p>
          <p>{item?.delivery}</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
