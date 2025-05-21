import styles from './StatBar.module.css';

export default function StatBar({ name, value, onIncrease, onDecrease }) {
  return (
    <section className={styles.statBarContainer}>
      <p>{name}</p>
      {/* <section
        className={styles.barFill}
        style={{ width: `${value}%` }}
      ></section> */}
      <section className={styles.statBarControls}>
        <span>{value}</span>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </section>
    </section>
  );
}