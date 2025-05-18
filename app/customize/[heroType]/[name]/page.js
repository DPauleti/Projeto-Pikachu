'use client';
import StatPage from "@/components/StatPage";

export default function Customize({params}) {
    const { name, heroType } = params;
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
    const initialStats = heroType === "speedster" ? speedsterStats : heroType === "guardian" ? guardianStats : strategistStats;
    const maxTotal = 350;

    return(
        <main>
            <p>Customize {name}</p>
            <StatPage initialStats={initialStats} maxTotal={maxTotal}></StatPage>
        </main>
    )
}