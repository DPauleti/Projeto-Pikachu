import styles from './StatsBattle.module.css';
import StatsBarName from './StatsBarName';
import StatsBar from './StatsBar.js';

export default function StatsBattle({ name, value, apiValue }) {
  return (
    <section className={styles.statsCustomizeContainer}>
      <StatsBar value={value} />
      <StatsBarName name={name} />
      <StatsBar value={apiValue} />
    </section>
  );
}