import styles from './StatBar.module.css';

export default function StatBar({ name, value, onIncrease, onDecrease }) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div className={styles.barWrapper}>
        <div className={styles.barBackground}>
          <div
            className={styles.barFill}
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className={styles.controls}>
          <button onClick={onDecrease}>-</button>
          <span>{value}</span>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </div>
  );
}