import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetails } from '../Redux/actions/itemdetails';
import ItemDetails from '../components/ItemDetails';

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(fetchItemDetails(id));
  }, [dispatch]);
  dispatch(fetchItemDetails(id));

  const item = useSelector((state) => state.itemDetailReducer);

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
