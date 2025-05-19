import styles from './HeroTypeCard.module.css'
import HeroTypeImage from './HeroTypeImage';
import HeroTypeDetails from './HeroTypeDetails';


export default function HeroTypeCard({ name, description, image, onClick }) {
  return (
    <section className={`${styles.heroTypeCard}`} onClick={onClick}>
      <section className={`${styles.heroFrame} ${styles.imageFrame}`}>
        <HeroTypeImage image={image} />
      </section>
      <section className={`${styles.heroFrame} ${styles.detailsFrame}`}>
        <HeroTypeDetails name={name} description={description} />
      </section>
    </section>
  );
}