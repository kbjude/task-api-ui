import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import store from '../Redux/store';
import fetchItems from '../Api/itemApi';
import Items from '../components/Items';

const ItemsContainer = () => {
  const { item, offset } = useSelctor((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
 
  useEffect(() => {
    if (store.getState().item.categories.length === 0) {
      dispatch(fetchItems());
    }
  }, [offset]);


    <div>
      <Items
        id={id}
        name={name}
        description={description}
      />
    </div>;
};

ItemsContainer.propTypes = {

};

export default ItemsContainer;
