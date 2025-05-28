import styles from './StatsCustomize.module.css';
import StatsBarName from './Stats/StatsBarName';
import StatsBar from './Stats/StatsBar';
import StatsControls from './Stats/StatsControl';

export default function StatsCustomize({ name, value, onIncrease, onDecrease }) {
  return (
    <section className={styles.statsCustomizeContainer}>
      <StatsBarName name={name} />
      <StatsBar value={value} />
      <StatsControls
        value={value}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </section>
  );
}