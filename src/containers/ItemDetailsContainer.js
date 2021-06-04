import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDetailAction } from '../Redux/actions/itemdetails';
import ItemDetails from '../components/ItemDetails';

const ItemDetailsContainer = () => {
  const item = useSelector((state) => state.item);
  const { id } = useParams;
  const dispatch = useDispatch();
  const {
    title, description, category, price,
  } = item;

  useEffect(() => () => {
    if (id && id !== '') dispatch(selectedDetailAction());
  }, [id]);
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
