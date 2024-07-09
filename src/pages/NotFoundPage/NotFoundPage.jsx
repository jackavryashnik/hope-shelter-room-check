import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import Button from '../../components/Button/Button';

const NotFoundPage = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => setCounter(counter - 1), 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <div className={css.page}>
      <h2 className={css.subtitle}>
        Oops! The page you requested could not be found.
      </h2>
      <div className={css.titleContainer}>
        <h1 className={css.title}>404</h1>
      </div>
      <div className={css.home}>
        <p className={css.text}>
          But don&apos;t worry we&apos;ll get you back now.
        </p>
        <p className={css.counter}>{counter}</p>
      </div>
      {!counter && <Navigate to="/" />}

      <Button
        className={css.button}
        type={'button'}
        onClick={() => setCounter(0)}
      >
        Go home now
      </Button>
    </div>
  );
};

export default NotFoundPage;
