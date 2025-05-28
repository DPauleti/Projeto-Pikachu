import Image from 'next/image';
import styles from './HeroTypeImage.module.css'

export default function HeroTypeImage({image}) {
  return (
      <section className={`${styles.typeImage}`}>
        <Image
          src= {image}
          alt='Logo'
          width={400}
          height={400}
          className={`${styles.typeImage}`}
          />
      </section>
  );
}