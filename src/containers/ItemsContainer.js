import axios from 'axios';
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import store from '../Redux/store';
// import fetchItems from '../Api/itemApi';
import Items from '../components/Items';
import { fetchItems } from '../Redux/actions/items';

const ItemsContainer = () => {
  const { items } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(items);

  const fetchItemList = async () => {
    const response = await axios
      .get('http://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(fetchItems(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchItemList();
    // dispatch(fetchItems());
  }, []);

  return (
    <>
      {items.item && items.item.map((item) => (
        <Items
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
        />
      ))}
    </>
  );
};

ItemsContainer.propTypes = {

};

export default ItemsContainer;
