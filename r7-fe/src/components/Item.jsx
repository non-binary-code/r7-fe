import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { conditionIds } from "../utils/condition-config";
import { categoryIds } from "../utils/category-config";

const Item = () => {
  const location = useLocation();
  const { item } = location.state;

  const { setBasketItems } = useStateContext();

  const alertText = `Do you really need this item?
  
  Remember you will need to store it until you are finished with it and then manage its disposal or re-gifting!`

  return (
    <>
      <div className='bg-gray-100 flex flex-col gap-10'>
        <div className='flex m-3 flex-col flex-wrap items-start p-5'>

          <div className=' gap-10 p-5'>
            <h1 className='text-3xl font-bold mb-0'>{item?.name}</h1>
            <p className='font-bold'>{categoryIds[item?.categoryTypeId - 1]}</p>
          </div>

          <div className='flex   flex-wrap gap-10 items-center p-5'>
            <img
              src={
                item.pictureUrl
                  ? item.pictureUrl
                  : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
              }
              alt={item.name}
              style={{ width: '200px', height: '200px' }}
            />

            <div>
              <p className='font-bold'>{item?.description}</p>
            </div>

          </div>

        </div>
        <div className='flex gap-3 items-center p-5 pt-0'>
          <div className='flex flex-col gap-3 p-5 py-0'>
            <p className=' font-bold'>{conditionIds[item?.conditionTypeId - 1]}</p>
            <p className='font-bold'>Delivery: {item.delivery ? "Available" : "Not Available"}</p>
            <p className='font-bold'>Collection: {item.collection ? "Available" : "Not Available"}</p>
            <p className='font-bold'>Postage: {item.postage ? "Available" : "Not Available"}</p>
            <p className='font-bold'>Recover: {item.recover ? "Arranged by current owner" : "To be arranged by recipient"}</p>
          </div>
        </div>
        <button className='ml-12 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => {
          window.confirm(alertText) ? setBasketItems((prev) => [...prev, item]) : setBasketItems((prev) => [...prev])
        }}>
          Add to basket
        </button>
      </div>
    </>
  );
};

export default Item;
