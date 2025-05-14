'use client';
import { useRouter } from "next/navigation";
import React from "react";
import HeroTypeCard from "@/components/HeroTypeCard";


export default function Type({params}) {
    const router = useRouter();
    const { name } = React.use(params);
    const handleClick = (heroType) => (event) => {
        event.preventDefault();
        router.push(`/customize/${heroType}/${encodeURIComponent(name)}`);
    }

    return (    
        <main>
            <h2>{name} will be a...</h2>
            <section>
                <HeroTypeCard></HeroTypeCard>
                {/* <HeroTypeDetails><button onClick={handleClick("Strategist")}>Strategist</button></HeroTypeDetails> */}

                {/* <HeroTypeCard></HeroTypeCard>
                <HeroTypeDetails><button onClick={handleClick("Guardian")}>Guardian</button></HeroTypeDetails>

                <HeroTypeCard></HeroTypeCard>
                <HeroTypeDetails><button onClick={handleClick("Speedster")}>Speedster</button></HeroTypeDetails> */}
            </section>
        </main>
    )
}