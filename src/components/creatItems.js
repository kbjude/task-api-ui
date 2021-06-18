import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

import Form, { form } from 'react-validation/build/form';
import Input from 'react-validation/build/input';

const Items = (props) => {
  const {
    name,
    description,
    handleSubmit,
    handleChange,
    onChangeDescription,
    successful,
    message,
  } = props;

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                Name
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  // validations={[required, vname]}
                />
              </div>

              <div className="form-group">
                Description
                <Input
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={onChangeDescription}
                  // validations={[required, vdescription]}
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                {message}
              </div>
            </div>
          )}
          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </Form>
      </div>
    </div>
  );
};

Items.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  successful: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Items;
