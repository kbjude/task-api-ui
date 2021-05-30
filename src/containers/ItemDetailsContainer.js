import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedDetailAction } from '../Redux/actions/items';
import ItemDetails from '../components/ItemDetails';
// import { race } from 'core-js/fn/promise';

const ItemDetailsContainer = () => {
  const item = useSelector((state) => state.item);
  // const {
  //   title, category, price, description, id,
  // } = item;
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    title, description, category, price,
  } = item;
  console.log(id);
  console.log(`This is the first id ${useParams()}`);
  console.log(`The ID is, ${id}`);
  console.log(`They are good, ${item}`);

  const fetchItemDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log('Err ', err);
      });
    dispatch(selectedDetailAction(response.data));
    console.log(`The call data, ${response.data}`);
  };

  useEffect(() => () => {
    if (id && id !== '') fetchItemDetails();
    // console.log(itemId);
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
