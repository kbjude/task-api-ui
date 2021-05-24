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
  const dispatch = useDispatch();
  const items = useSelector((state) => state);
  const fetchItemList = async () => {
    const response = await axios
      .get('http://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(fetchItems(response.data));
    dispatch(fetchItems('Testing the dispatch'));
    console.log(response.data);
  };

  useEffect(() => {
    fetchItemList();
    // dispatch(fetchItems());
  }, []);

  console.log(items);

  return (
    <>
      {items.items && items.items.map((item) => (
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
