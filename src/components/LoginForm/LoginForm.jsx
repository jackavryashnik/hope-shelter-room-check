import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  login: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({ setter }) => {
  const loginFormId = useId();

  const handleLogin = async (values, actions) => {
    // http запит на логін
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
      initialValues={{ login: '', password: '' }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor={`${loginFormId}-login`}>Login</label>
          <Field type="text" name="login" id={`${loginFormId}-login`} />
          <ErrorMessage name="login" component="span" />
        </div>
        <div>
          <label htmlFor={`${loginFormId}-password`}>Name</label>
          <Field type="text" name="password" id={`${loginFormId}-password`} />
          <ErrorMessage name="password" component="span" />
        </div>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
