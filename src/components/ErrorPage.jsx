import { useRouteError } from 'react-router-dom';
import styles from '../style';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={`flex flex-col ${styles.padding}`}>
      <h1 className={`${styles.heading2} text-dimRose`}>Oops!</h1>
      <p className={styles.paragraph}>Sorry, an unexpected error has occurred:</p>
      <p className={styles.paragraph}>
        -
        {' '}
        <i>{error.statusText || error.message}</i>
        {' '}
        -
      </p>
    </div>
  );
};

export default ErrorPage;
