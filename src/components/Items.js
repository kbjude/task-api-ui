import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Items = (props) => {
  // const items = useSelector((state) => state);
  const {
    id, name, description, path,
  } = props;
  // console.log(`${items}`);
  return (
    <div key={id}>
      <Link to={path}>
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
      </Link>
    </div>
  );
};

Items.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Items;
