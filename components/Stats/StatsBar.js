import styles from './StatsBar.module.css';

export default function StatsBar({ value }) {
  return (
    <section className={styles.statBarContainer}>
      <section
        className={styles.statBar}
        style={{ width: `${value}%` }}
      />
    </section>
  );
}