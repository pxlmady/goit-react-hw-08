import React from "react";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const MAX_CHAR_NAME_VALIDATION = 50;
  const MIN_CHAR_PASSWORD_VALIDATION = 7;

  const registrationFormSchema = Yup.object({
    name: Yup.string()
      .required("User name or nikname is required!")
      .max(
        MAX_CHAR_NAME_VALIDATION,
        `Your username must be less or equal ${MAX_CHAR_NAME_VALIDATION} characters!`
      ),
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid!"),
    password: Yup.string()
      .required("Password is required!")
      .min(
        MIN_CHAR_PASSWORD_VALIDATION,
        `Your password must be greater than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
      ),
  });
  const FORM_INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    {
      console.log(values);
    }
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={registrationFormSchema}>
      <Form className={css.formContainer}>
        <label className={css.formLabel}>
          {" "}
          User name:
          <Field type="text" name="name" placeholder="Enter your name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.formLabel}>
          {" "}
          User e-mail:
          <Field
            type="email"
            name="email"
            placeholder="youremail@something.com"
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        <label className={css.formLabel}>
          {" "}
          Password:
          <Field type="password" name="password" placeholder="lalalal22112" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>
        <button type="submit" className={css.submitFormButton}>
          Register me
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
