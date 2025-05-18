import Image from 'next/image';
import styles from './HeroTypeCard.module.css'

export default function HeroTypeCard({name, description, image, onClick}) {
  return (
    <section className={`${styles.heroTypeCard}`} onClick={onClick}>
      {/* <section className={styles}> */}
        <Image
          src= {image}
          alt='Logo'
          width={400}
          height={400}
          className={`${styles.typeImage}`}
          />
      {/* </section> */}
        <section className={`${styles.typeDetails}`}>
          <h1>{name}</h1>
        </section>
    </section>
  );
}