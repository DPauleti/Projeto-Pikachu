'use client'

import { useState } from 'react';
import styles from './CustomizeSection.module.css'
import StatsBattle from './Stats/StatsBattle';

const STEP = 10;
const MAX_PER_STAT = 100;
const MIN_PER_STAT = 0;

export default function BattleSection({apiStats}) {
  const stats = apiStats;

  return (
    <section className={styles.battleStatsContainer}>
      <section>
        {Object.keys(stats).map(stat => (
          <StatsBattle
            key={stat}
            name={stat}
            value={stats[stat]}
          />
        ))}
      </section>
    </section>
  );
}