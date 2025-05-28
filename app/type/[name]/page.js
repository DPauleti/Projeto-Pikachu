'use client';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeroTypeCard from "@/components/HeroType/HeroTypeCard";
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
      description: 'Fast and agile, masters of movement.',
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleDotClick = (index) => () => setActiveIndex(index);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 1250);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

    return (    
        <main>
            <PagesHeader title={name + "will be a..."}/>
            <section className={`${styles.typeSection}`}>
              {isMobile ? (
                <>
                  <HeroTypeCard 
                    key={heroTypes[activeIndex].key}
                    name={heroTypes[activeIndex].name}
                    description={heroTypes[activeIndex].description}
                    image={heroTypes[activeIndex].image}
                    onClick={handleClick(heroTypes[activeIndex].onClick)}
                  />
                  <section className={styles.dotsContainer}>
                    {heroTypes.map((_, i) => (
                      <section
                        key={i}
                        onClick={handleDotClick(i)}
                        className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
                      />
                      ))}
                  </section>
                </>
              ) : (
                heroTypes.map((hero) => (
                  <HeroTypeCard
                      key={hero.key}
                      name={hero.name}
                      description={hero.description}
                      image={hero.image}
                      onClick={handleClick(hero.key)}
                  />
                ))
              )}          
            </section>
        </main>
    )}