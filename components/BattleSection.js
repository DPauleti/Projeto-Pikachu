'use client'

import { useState } from 'react';
import styles from './CustomizeSection.module.css'
import StatsBattle from './Stats/StatsBattle';

const STEP = 10;
const MAX_PER_STAT = 100;
const MIN_PER_STAT = 0;

export default function BattleSection({ initialStats, maxTotal }) {

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
    <section className={styles.battleStatsContainer}>

      <section>
        {Object.keys(stats).map(stat => (
          <StatsBattle
            key={stat}
            name={stat}
            value={stats[stat]}
            // apiValue={}
          />
        ))}
      </section>
    </section>
  );
}