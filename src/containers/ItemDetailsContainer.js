import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedDetailAction } from '../Redux/actions/items';
import ItemDetails from '../components/ItemDetails';
// import { race } from 'core-js/fn/promise';

const ItemDetailsContainer = () => {
  const item = useSelector((state) => state.item);
  const { itemId } = useParams();
  const dispatch = useDispatch();
  console.log(itemId);
  console.log(item);

  const fetchItemDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/items/${itemId}`)
      .catch((err) => {
        console.log('Err ', err);
      });
    dispatch(selectedDetailAction(response.data));
  };

  useEffect(() => () => {
    if (itemId && itemId !== '') fetchItemDetails();
  }, [itemId]);
  return (
    <div classNam>
      <h1> Item Details </h1>
      <ItemDetails
        key={item.id}
        id={item.id}
        name={item.title}
        description={item.description}
      />
    </div>
  );
};

export default ItemDetailsContainer;
