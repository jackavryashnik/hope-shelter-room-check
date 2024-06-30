import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import Button from '../Button/Button';
import css from './RegisterForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const RegisterForm = ({ setter }) => {
  const registerFormId = useId();

  const handleRegister = async (values, actions) => {
    // const result = await axios.post(values);
    // if (result.status === 201) {
    //   setter(true);
    //   actions.resetForm();
    // } else {
    //   console.log(result.status);
    // }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleRegister}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.inputs}>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="name"
              id={`${registerFormId}-name`}
              className={css.input}
              placeholder="Name"
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="email"
              id={`${registerFormId}-email`}
              className={css.input}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="password"
              id={`${registerFormId}-password`}
              className={css.input}
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </div>
        </div>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
