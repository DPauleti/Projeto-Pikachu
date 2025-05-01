import styles from "./page.module.css";

export default function Home(){
    return (
        <main className={`${styles.page} flex flex-col items-center justify-center min-h-screen bg-gray-100`}>
            <div className={`${styles.box} bg-black shadow-md rounded-lg p-8 max-w-md w-full`}>
                <h2 className={`${styles.text}`}>What is your hero name?</h2>
                <form action="/api/hero" method="POST" className={`${styles.form}`}>
                    <input type="text" name="name" placeholder="Name" className="border-2 border-gray-300 p-2 rounded-md" required />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Generate</button>
                </form>
            </div>      
        </main>
    );
}