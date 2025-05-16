import Image from 'next/image';
import styles from './HeroTypeCard.module.css'

export default function HeroTypeCard() {
  return (
    <section className={`${styles.heroTypeCard}`}>
        {/* <Image
          src="/thunder.svg"
          alt='Speedster logo'
          width={400}
          height={400}
        /> */}
    </section>
  );
}