'use client';
import { useRouter } from "next/navigation";
import React from "react";
import HeroTypeCard from "@/components/HeroTypeCard";
import styles from './page.module.css'


export default function Type({params}) {
    const router = useRouter();
    const { name } = React.use(params);

    const handleClick = (heroType) => (event) => {
        event.preventDefault();
        router.push(`/customize/${heroType}/${encodeURIComponent(name)}`);
    }

    const heroTypes = [
    {
      key: 'speedster',
      name: 'Speedster',
      description: 'Fast and agile, striking before foes can react.',
      image: '/raio.png'
    },
    {
      key: 'guardian',
      name: 'Guardian',
      description: 'Strong and tough, protectors of justice.',
      image: '/shield.png'
    },
    {
      key: 'strategist',
      name: 'Strategist',
      description: 'Intelligent and cunning, experts in tactics.',
      image: '/strategist.png'
    }
  ];

    return (    
        <main>
            <header className={`${styles.typeHeader}`}>
                <h2>{name} will be a...</h2>
            </header>
            <section className={`${styles.typeSection}`}>
              { heroTypes.map((hero) => (
                  <HeroTypeCard
                      key={hero.key}
                      name={hero.name}
                      description={hero.description}
                      image={hero.image}
                      onClick={handleClick(hero.key)}
                  />
                ))}
            </section>
        </main>
    )
}