import React from 'react';
import PropTypes from 'prop-types';

const Items = ({
  id, name, description, path,
}) => (
  <div>
    <h5>
      {' '}
      {id}
      {' '}
    </h5>
    <h5>
      {' '}
      {name}
      {' '}
    </h5>
    <h5>
      {' '}
      {description}
      {' '}
    </h5>
  </div>
);

Items.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Items;
