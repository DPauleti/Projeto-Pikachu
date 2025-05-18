import { useState } from 'react';
import StatBar from './StatBar';

const STEP = 10;
const MAX_PER_STAT = 100;
const MIN_PER_STAT = 0;

export default function StatPage({ initialStats, maxTotal }) {
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
    <div>
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
    </div>
  );
}