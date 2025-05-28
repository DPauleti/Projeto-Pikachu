'use client'

import { useState } from 'react';
import StatsCustomize from './StatsCustomize';
import styles from './CustomizeSection.module.css'
import NextButton from './utils/NextButton';

const STEP = 10;
const MAX_PER_STAT = 100;
const MIN_PER_STAT = 0;

export default function CustomizeSection({ initialStats, maxTotal }) {

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

      <section>
        {Object.keys(stats).map(stat => (
          <StatsCustomize
            key={stat}
            name={stat}
            value={stats[stat]}
            onIncrease={() => changeStat(stat, STEP)}
            onDecrease={() => changeStat(stat, -STEP)}
          />
        ))}
      </section>

      <section className={styles.nextBtnCustomize}>
        <NextButton /* onClick={handleNext} *//>
      </section>
    </section>
  );
}