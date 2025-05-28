import HeroTypeCard from "@/components/HeroType/HeroTypeCard";
import PagesHeader from "@/components/utils/PagesHeader";
import BattleSection from "@/components/BattleSection";
import styles from "./page.module.css"


export default function Battle( {name, apiName, heroType} ) {
  
  const speedsterImage = '/raio.png'
  const guardianImage = '/shield.png'
  const strategistImage = '/strategist.png'
  const heroSelected = heroType === "speedster" ? speedsterImage : heroType === "guardian" ? guardianImage : strategistImage;

  const apiKey = "a62a0e84dd56b2d9443da9a707fc78df";
  const baseUrl = "https://superheroapi.com/api";
  const apiHeroID = Math.floor(Math.random() * 731) + 1; // Random hero ID between 1 and 731
  var apiHeroStats = {};
  var apiHeroName = "";
  const apiHero = fetch(`${baseUrl}/${apiKey}/${apiHeroID}`)
    .then(response => response.json())
    .then(data => {
      apiHeroStats = data.powerstats;
      apiHeroName = data.name;
    })
    .catch(error => {
      console.error("Error fetching hero data:", error);
    });

  return (
    <main className={"battlePage"}>
      <PagesHeader title={"BATTLE"} />
      <section className={styles.battleContent} >
        <section className={styles.herosSpace} >
          <h3>{name}</h3>
          <HeroTypeCard 
            image={heroSelected}
            enableHover={false}
          />
        </section>
        <section>
          {/* <BattleSection 
            initialStats={}
            maxTotal={}
          /> */}
        </section>
        <section className={styles.herosSpace} >
          <h3>{apiName}</h3>
          
          <BattleSection 
            initialStats={apiHeroStats} 
            maxTotal={800} 
            heroType={"strategist"}
            name={apiHeroName}
          />
        </section>
      </section>
      
    </main>

  )
}