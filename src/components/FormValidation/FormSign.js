import React from "react";
import useForm from "../../hooks/useForm";
import validate from "../../utils/validate";
import './Form.css'

const FormSign = () => {
  const {handleChange, values, handleSubmit, errors} = useForm(validate)
  return (
    <div className="form_content_right">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h1>Get Start with us! Create your account</h1>
        <div className="form_inputs">
          <label htmlFor="username" className="form_label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className={`form_input ${errors.username ? 'error_username' : ''}`}
            placeholder="Enter your username"
            onChange={handleChange}
            value={values.username}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form_inputs">
          <label htmlFor="email" className="form_label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`form_input ${errors.email ? 'error_email' : ''}`}
            placeholder="Enter your email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form_inputs">
          <label htmlFor="password" className="form_label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`form_input ${errors.password ? 'error_password' : ''}`}
            placeholder="Enter your password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form_inputs">
          <label htmlFor="cpassword" className="form_label">
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            className={`form_input ${errors.cpassword ? 'error_cpassword' : ''}`}
            placeholder="Enter your confirm password"
            onChange={handleChange}
            value={values.cpassword}
          />
          {errors.cpassword && <p>{errors.cpassword}</p>}
        </div>
        <button className="form_input_btn" type="submit">
          Sign up
        </button>
        <span className="form_input_login">Already have an accound? Login <a href="#">here</a></span>
      </form>
    </div>
  );
};

export default FormSign;
