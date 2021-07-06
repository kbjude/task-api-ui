import PropTypes from 'prop-types';
import { TextField, Input, Button } from '@material-ui/core';

// import { Redirect } from 'react-router-dom';

// import Form, { form } from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import TextArea from 'react-validation/build/textarea';

const Items = (props) => {
  const {
    name,
    description,
    handleSubmit,
    handleChangeDescription,
    handleChangeName,
  } = props;

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="card card-container">
            <div className="form-group">
              Name
              <Input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={handleChangeName}
              />
            </div>

            <div className="form-group">
              Description
              <TextField
                type="text"
                className="form-control"
                name="description"
                value={description}
                onChange={handleChangeDescription}
              />
            </div>

            <div className="form-group">
              <Button
                type="submit"
                className="btn btn-primary btn-block"
                onSubmit={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

Items.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChangeDescription: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
};

export default Items;
