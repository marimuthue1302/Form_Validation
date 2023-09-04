export default function validate(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Username is required";
    } else if (values.username.length < 3) {
      errors.username = "Username must be at least 3 characters long";
    }
  
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
  
    if (!values.cpassword.trim()) {
      errors.cpassword = "Confirm Password is required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Password and Confirm Password do not match";
    }
  
    return errors;
  }
  