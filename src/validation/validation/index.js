const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "username Required";
  }

  if (!values.phone) {
    errors.phone = "MobileNumber Required";
  } else if (values.phone && !/^([6-9]\d{9})$/i.test(values.phone)) {
    errors.phone = "Invalid mobile number, must be 10 digits";
  }

  if (!values.password) {
    errors.password = "password Required";
  } else if (
    values.password &&
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/i.test(values.password)
  ) {
    errors.password =
      "Invalid password , password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
  }

  if (!values.mail) {
    errors.mail = "email Required";
  } else if (
    values.mail &&
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.mail
    )
  ) {
    errors.mail = "Invalid email ";
  }

  if (!values.aadhaar) {
    errors.aadhaar = "Aadhaar Number Required";
  } else if (values.aadhaar && !/^\d{12}$/i.test(values.aadhaar)) {
    errors.aadhaar = "Invalid Aadhaar no";
  }

  if (!values.pan) {
    errors.pan = "Pan Number Required";
  }

  if (!values.address) {
    errors.address = "Address Required";
  }

  return errors;
};

export default validate;
