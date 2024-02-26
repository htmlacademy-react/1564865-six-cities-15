import styles from './not-found-page.module.css';

function NotFoundPage() {
  return (
    <div className={`page ${styles.notFoundPage}`}>
      <title>{'6 cities - Not Found'}</title>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.text}>Return to the main page
      </p>
    </div>
  );
}

export default NotFoundPage;
