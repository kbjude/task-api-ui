import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { createItem } from '../Redux/actions/items';
import Items from '../components/creatItems';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const ItemsContainer = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(createItem(name, description))
        .then(() => {
          // props.history.push('/profile');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

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
          onChangeName={onChangeName}
          onChangeDescription={onChangeDescription}
          handleSubmit={handleSubmit}
        />
      ))}
    </>
  );
};

ItemsContainer.propTypes = {

};

export default ItemsContainer;
