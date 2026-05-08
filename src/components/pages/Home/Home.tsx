import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../../ui/Button';

const Home = () => {
  return (
    <main className={styles.home}>
      <h1 className={styles.title}>
        <span>Welcome to </span>
        <span className={styles.brand}>Qyuféé</span>
      </h1>
      <p className={styles.subtitle}>Serving you the best coffee experience, digitally.</p>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </main>
  );
};

export default Home;