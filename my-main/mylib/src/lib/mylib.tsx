import styles from './mylib.module.css';

/* eslint-disable-next-line */
export interface MylibProps {}

export function Mylib(props: MylibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mylib!</h1>
    </div>
  );
}

export default Mylib;
