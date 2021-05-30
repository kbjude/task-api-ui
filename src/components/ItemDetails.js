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
      <h5>
        Item Name
        {' '}
        {name}
        {' '}
      </h5>
      <h5>
        Description
        {' '}
        {description}
        {' '}
      </h5>
      <h5>
        Category
        {' '}
        {category}
        {' '}
      </h5>
      <h5>
        Price
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
