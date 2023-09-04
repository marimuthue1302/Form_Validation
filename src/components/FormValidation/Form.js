import React from "react";
import FormSign from "./FormSign";
import Image from '../../assets/rocket-png-32191.png'
import './Form.css'

const Form = () => {
  return (
    <>
    <div className="form_container">
      <span className="close_btn">X</span>
      <div className="form_content_left">
        <img src={Image} alt="left" className="form_img" />
      </div>
    <FormSign />

    </div>
    </>
  );
};

export default Form;
