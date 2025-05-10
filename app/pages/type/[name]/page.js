'use client';
import { useRouter } from "next/navigation";
import React from "react";


export default function Type({params}) {
    const router = useRouter();
    const { name } = React.use(params);
    const handleClick = (heroType) => (event) => {
        event.preventDefault();
        router.push(`/pages/customize/${heroType}/${encodeURIComponent(name)}`);
    }

    return (    
        <main>
            <h1>HERO</h1>
            <h2>{name}</h2>
            <form>
                <button onClick={handleClick("Strategist")}>Strategist</button>
                <button onClick={handleClick("Guardian")}>Guardian</button>
                <button onClick={handleClick("Speedster")}>Speedster</button>
            </form>
        </main>
    )
}