import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import Button from '../Button/Button';
import css from './LoginForm.module.css';
import { login } from '../../api/services/auth';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { userAtom } from '../../state';

const validationSchema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const loginFormId = useId();
  const setUser = useSetAtom(userAtom);

  const navigate = useNavigate();
  const handleLogin = async (values, actions) => {
    const result = await login(values);
    if (result.status === 201) {
      localStorage.setItem('token', result.data.token);

      setUser(prevState => ({ ...prevState, user: result.data.user }));
      navigate('/');
      actions.resetForm();
    } else {
      console.log(result.status);
    }
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
