import PropTypes from 'prop-types';

const ItemDetails = (props) => {
  const {
    id, name, description, category, price,
  } = props;
  return (
    <div key={id}>
      <h5>
        {' '}
        {id}
        {' '}
      </h5>
      <h3>Item Name</h3>
      <h5>
        {' '}
        {name}
        {' '}
      </h5>
      <h3>Description</h3>
      <h5>
        {' '}
        {description}
        {' '}
      </h5>
      <h3>Category</h3>
      <h5>
        {' '}
        {category}
        {' '}
      </h5>
      <h3>Price</h3>
      <h5>
        {' '}
        {price}
        {' '}
      </h5>
    </div>
  );
};

ItemDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ItemDetails;
