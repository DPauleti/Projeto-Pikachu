import styles from './StatsControls.module.css';

export default function StatsControls({ value, onIncrease, onDecrease }) {
  return (
    <section className={styles.statsControls}>
      <span>{value}</span>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
    </section>
  );
}