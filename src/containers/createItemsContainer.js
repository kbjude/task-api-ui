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

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const items = useSelector((state) => state.itemReducer);

  return (
    <>
      {items.items && items.items.map((item) => (
        <Items
          key={item.id}
          id={item.id}
          name={item.title}
          description={item.description}
          path={`/items/${item.id}`}
        />
      ))}
    </>
  );
};

ItemsContainer.propTypes = {

};

export default ItemsContainer;
