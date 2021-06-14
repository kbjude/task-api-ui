import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

import Form, { form } from 'react-validation/build/form';
import Input from 'react-validation/build/input';
// import CheckButton from 'react-validation/build/button';

const Items = (props) => {
  const {
    id,
    name,
    description,
    // handleSubmit,
    onChangeName,
    onChangeDescription,
    required,
    startTime,
    endTime,
    vname,
    vdescription,
    handleRegister,
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

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                Name
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[required, vname]}
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
                  validations={[required, vdescription]}
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Sign Up
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  required: PropTypes.func.isRequired,
  vname: PropTypes.func.isRequired,
  vdescription: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  successful: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Items;
