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

    return (    
        <main>
            <header className={`${styles.typeHeader}`}>
                <h2>{name} will be a...</h2>
            </header>
            <section className={`${styles.typeSection}`}>
                <HeroTypeCard name="Speedster" image="/raio.png" onClick={handleClick("speedster")}></HeroTypeCard>
                <HeroTypeCard name="Guardian" image="/shield.png" onClick={handleClick("guardian")}></HeroTypeCard>
                <HeroTypeCard name="Strategist" image="/strategist.png" onClick={handleClick("strategist")}></HeroTypeCard>
            </section>
        </main>
    )
}