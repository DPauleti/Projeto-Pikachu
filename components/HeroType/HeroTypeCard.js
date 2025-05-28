import styles from './HeroTypeCard.module.css'
import HeroTypeImage from './HeroTypeImage';
import HeroTypeDetails from './HeroTypeDetails';


export default function HeroTypeCard({ name, description, image, onClick, enableHover = true }) {
  return (
    <section onClick={onClick}
      className={
        `${styles.heroTypeCard} ${enableHover ? styles.hoverEnabled : styles.noHover}`
      }
    >
      <section className={`${styles.imageFrame}`}>
        <HeroTypeImage image={image} />
      </section>
      <section className={`${styles.detailsFrame}`}>
        <HeroTypeDetails name={name} description={description} />
      </section>
    </section>
  );
}