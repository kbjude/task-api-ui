import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setItemDetails } from '../Redux/actions/itemdetails';
import ItemDetails from '../components/ItemDetails';

const ItemDetailsContainer = () => {
  const { id } = useParams;
  const dispatch = useDispatch();

  useEffect(() => () => {
    if (id && id !== '') dispatch(setItemDetails());
  }, [dispatch]);

  const item = useSelector((state) => state.item);
  console.log(useParams());
  const {
    title, description, category, price,
  } = item;

  return (
    <div>
      <h1> Item Details </h1>
      <ItemDetails
        key={id}
        id={id}
        name={title}
        description={description}
        category={category}
        price={price}
      />
    </div>
  );
};

export default ItemDetailsContainer;
