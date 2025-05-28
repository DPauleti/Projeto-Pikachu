import styles from './StatsBarName.module.css'

export default function StatsBarName({ name }) {
  return <p className={styles.statsBarName}>{name}</p>;
}