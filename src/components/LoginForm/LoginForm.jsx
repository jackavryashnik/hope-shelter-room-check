import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import Button from '../Button/Button';
import css from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({ setter }) => {
  const loginFormId = useId();

  const handleLogin = async (values, actions) => {
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
      initialValues={{ email: '', password: '' }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.inputs}>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="email"
              id={`${loginFormId}-email`}
              className={css.input}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="password"
              id={`${loginFormId}-password`}
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
        <Button type="submit">Log in</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
