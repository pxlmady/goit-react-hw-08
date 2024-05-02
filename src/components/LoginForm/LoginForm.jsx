import React from "react";

import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
const LoginForm = () => {
  const dispatch = useDispatch();
  const MIN_CHAR_PASSWORD_VALIDATION = 7;

  const loginFormSchema = Yup.object({
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
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    {
      console.log(values);
    }
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={loginFormSchema}>
      <Form className={css.formContainer}>
        <label className={css.formLabel}>
          {" "}
          Email:
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
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
