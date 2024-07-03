import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import Button from '../Button/Button';
import css from './RegisterForm.module.css';
import { register } from '../../api/services/auth';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const RegisterForm = ({ setter }) => {
  const registerFormId = useId();

  const handleRegister = async (values, actions) => {
    console.log(values);
    const result = await register(values);
    if (result.status === 201) {
      console.log(result);
      // setter(true);
      // actions.resetForm();
    } else {
      console.log(result.status);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      onSubmit={handleRegister}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.inputs}>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="username"
              id={`${registerFormId}-name`}
              className={css.input}
              placeholder="Name"
            />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
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
