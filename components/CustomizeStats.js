import { useState } from 'react';
import StatBar from './StatBar';
import styles from './CustomizeStats.module.css'
import NextButton from './NextButton';

const STEP = 10;
const MAX_PER_STAT = 100;
const MIN_PER_STAT = 0;

export default function CustomizeStats({ initialStats, maxTotal }) {
  const [stats, setStats] = useState(initialStats);
  const total = Object.values(stats).reduce((sum, val) => sum + val, 0);

  const changeStat = (key, delta) => {
    setStats(prev => {
      const newValue = prev[key] + delta;
      const newTotal = total + delta;

      if (
        newValue >= MIN_PER_STAT &&
        newValue <= MAX_PER_STAT &&
        newTotal <= maxTotal &&
        newTotal >= 0
      ) {
        return { ...prev, [key]: newValue };
      }

      return prev;
    });
  };

  return (
    <section className={styles.customizeStatsContainer}>
      <h2>Total Used: {total} / {maxTotal}</h2>
      {Object.keys(stats).map(stat => (
        <StatBar
          key={stat}
          name={stat}
          value={stats[stat]}
          onIncrease={() => changeStat(stat, STEP)}
          onDecrease={() => changeStat(stat, -STEP)}
        />
      ))}
      <section className={styles.nextBtnCustomize}>
        <NextButton />
      </section>
    </section>
  );
}