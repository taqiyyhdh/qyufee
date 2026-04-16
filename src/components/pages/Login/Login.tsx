import type { FormEvent } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import styles from './Login.module.scss';

const Login = () => {
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const payload = {
      email: form.email.value,
      password: form.Password.value,
    };
    const result = await Login(payload);
  };
  return (
    <main className={styles.login}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <Input label='email' name='email' id='email' type='email' placeholder='Insert Email' required />
          <Input label='Password' name='Password' id='Password' type='Password' placeholder='Insert Password' required />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </main>
  );
};