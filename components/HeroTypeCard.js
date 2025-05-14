import Image from 'next/image';

export default function HeroTypeCard() {
  return (
    <>
        <Image
          src="/raio.png"
          alt='Speedster logo'
          width={511.5}
          height={511.5}
        />
    </>
  );
}