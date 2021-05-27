import PropTypes from 'prop-types';

const ItemDetails = (props) => {
  const {
    id, name, description,
  } = props;
  return (
    <div key={id}>
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
};

ItemDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ItemDetails;
