import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const RegisterItemContainer = ({ actions }) => {
  handleSubmit = (event) => {
    event.preventDefault();
    const { actions } = props;
    actions.createJob(job);
  };

  handleUpdate = (event) => {
    event.preventDefault();
    const { actions } = props;
    actions.updateJob(job);
  };

  return (
    <div />
  );
};

RegisterItemContainer.propTypes = {

};

export default RegisterItemContainer;
