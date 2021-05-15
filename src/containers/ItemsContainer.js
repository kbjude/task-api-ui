import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import store from '../Redux/store';
import fetchItems from '../Api/itemApi';
import Items from '../components/Items';

function ItemsContainer() {
  const { items } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <>
      {items && items.map((item) => (
        <Items
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
        />
      ))}
    </>
  );
}

ItemsContainer.propTypes = {

};

export default ItemsContainer;
