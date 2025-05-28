import styles from './HeroTypeCard.module.css'

export default function HeroTypeDetails({name, description}) {
  return (
    <section className={`${styles.typeDetails}`}>
      <h1>{name}</h1>
      <p>{description}</p>
    </section>
  );
}