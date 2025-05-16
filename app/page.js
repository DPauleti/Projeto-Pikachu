'use client';

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home(){
    const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
                
        router.push(`/type/${encodeURIComponent(name)}`);
    }

    return (
        <main className={`${styles.home}`}>
            <section className={`${styles.box}`}>
                <h1 className={`${styles.homeTitle}`}>WHAT IS YOUR HERO NAME?</h1>
                <form className={`${styles.form}`} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" required />
                    <button type="submit">NEXT</button>
                </form>
            </section>
        </main>
    );
}