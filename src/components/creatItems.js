import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

import Form, { form } from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

const Items = (props) => {
  const {
    id,
    name,
    description,
    handleSubmit,
    onChangeName,
    onChangeDescription,
    required, 
    vname,
    vdescription, 
    handleRegister, 
    successful,
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
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Description</label>
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
                <label htmlFor="password">Id</label>
                <Input
                  type="id"
                  className="form-control"
                  name="id"
                  value={id}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
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
