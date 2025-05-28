'use client';
import { use } from 'react';
import HeroTypeCard from "../../../../components/HeroType/HeroTypeCard";
import CustomizeSection from "../../../../components/CustomizeSection";
import styles from "./page.module.css"
import PagesHeader from '../../../../components/utils/PagesHeader';
import NextButton from '../../../../components/utils/NextButton';
import { useRouter } from "next/navigation";

export default function Customize({params}) {
    const router = useRouter();
    const { name, heroType } = use(params);

    const speedsterImage = '/raio.png'
    const guardianImage = '/shield.png'
    const strategistImage = '/strategist.png'

    const handleSubmit = async (event) => {
        event.preventDefault();
        router.push(`/battle/${encodeURIComponent(name)}/${encodeURIComponent(heroType)}`);
    }

    const speedsterStats = {
        Intelligence: 50,
        Strength: 50,
        Speed: 70,
        Durability: 30,
        Power: 30,
        Combat: 70
    }
    const guardianStats = {
        Intelligence: 30,
        Strength: 70,
        Speed: 30,
        Durability: 70,
        Power: 50,
        Combat: 50
    }
    const strategistStats = {
        Intelligence: 70,
        Strength: 30,
        Speed: 50,
        Durability: 50,
        Power: 70,
        Combat: 30
    }

    const heroSelected = heroType === "speedster" ? speedsterImage : heroType === "guardian" ? guardianImage : strategistImage;

    const initialStats = heroType === "speedster" ? speedsterStats : heroType === "guardian" ? guardianStats : strategistStats;
    const maxTotal = 350;

    return(
        <main className={`${styles.customizePage}`}>
            <PagesHeader title={"Customize " + name} />
            <section className={`${styles.customizeContent}`}>
                <HeroTypeCard image={heroSelected} enableHover={false}  />
                <section className={`${styles.customizeSection}`}>
                <CustomizeSection
                    initialStats={initialStats}
                    maxTotal={350}
                    heroType={heroType}
                    name={name}
                />
                <form onSubmit={handleSubmit}>
                    <NextButton type="submit"/>
                </form>
                </section>                
            </section>
        </main>
    )
}