import Image from 'next/image';
import styles from './HeroTypeCard.module.css'

export default function HeroTypeCard({name, description, image}) {
  return (
    <section className={`${styles.heroTypeCard}`}>
      <h1>{name}</h1>
        {/* <Image
          src="/thunder.svg"
          alt='Speedster logo'
          width={400}
          height={400}
        /> */}
    </section>
  );
}