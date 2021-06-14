import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItemDetail } from '../Redux/actions/items';
import ItemDetails from '../components/creatItemDetail';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vdescription = (value) => {
  if (value.length < 3 || value.length > 100) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 100 characters.
      </div>
    );
  }
};

const ItemDetailsContainer = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [successful, setSuccessful] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
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

  const onChangeStartTime = (e) => {
    const startTime = e.target.value;
    setStartTime(startTime);
  };

  const onChangeEndTime = (e) => {
    const endTime = e.target.value;
    setEndTime(endTime);
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

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name, description))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  const itemDetail = useSelector((state) => state.itemReducer);

  return (
    <>
      {itemDetail.itemDetail && itemDetail.itemDetail.map((itemDetail) => (
        <ItemDetails
          key={itemDetail.id}
          id={itemDetail.id}
          name={itemDetail.title}
          description={itemDetail.description}
          startTime={itemDetail.startTime}
          endTime={itemDetail.endTime}
          path={`/items/${itemDetail.id}`}
          onChangeName={onChangeName}
          onChangeDescription={onChangeDescription}
          handleSubmit={handleSubmit}
          required={required}
          vname={vname}
          vdescription={vdescription}
          handleRegister={handleRegister}
          successful={successful}
          message={message}
          onChangeStartTime={onChangeStartTime}
          onChangeEndTime={onChangeEndTime}
        />
      ))}
    </>
  );
};

ItemDetailsContainer.propTypes = {

};

export default ItemDetailsContainer;
