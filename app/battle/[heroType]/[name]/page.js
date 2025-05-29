import HeroTypeCard from "../../../../components/HeroType/HeroTypeCard";
import PagesHeader from "../../../../components/utils/PagesHeader";
import BattleSection from "../../../../components/BattleSection";
import styles from "./page.module.css"
import StatsCustomize from "../../../../components/StatsCustomize";


export default async function Battle( {name, apiName, heroType} ) {
  
  const speedsterImage = '/raio.png'
  const guardianImage = '/shield.png'
  const strategistImage = '/strategist.png'
  const heroSelected = heroType === "speedster" ? speedsterImage : heroType === "guardian" ? guardianImage : strategistImage;

  const apiKey = "a62a0e84dd56b2d9443da9a707fc78df";
  const baseUrl = "https://superheroapi.com/api";
  const apiHeroID = Math.floor(Math.random() * 731) + 1; // Random hero ID between 1 and 731
  var apiHeroStats = {};
  var apiHeroName = "";
  var heroImage = "";
  const apiHero = await fetch(`${baseUrl}/${apiKey}/${apiHeroID}`)
    .then(response => response.json())
    .then(data => {
      apiHeroStats = data.powerstats;
      apiHeroName = data.name;
      heroImage = data.image.url;
      console.log("API Hero Stats:", apiHeroStats);
      console.log("API Hero Name:", apiHeroName);
    })
    .catch(error => {
      console.error("Error fetching hero data:", error);
    });

  return (
    <main className={"battlePage"}>
      <PagesHeader title={"Random Hero!"} />
      <section className={styles.battleContent} >
        <section className={styles.herosSpace} >
          <h3>{apiHeroName}</h3>
          <img src={heroImage} alt={apiHeroName} className={styles.heroImage} />
        </section>
        <section className={styles.herosSpace} >        
        <section>
          <StatsCustomize
            name={"Intelligence"}
            value={apiHeroStats["intelligence"]}
          />
          <StatsCustomize
            name={"Strength"}
            value={apiHeroStats["strength"]}              
          />
          <StatsCustomize
            name={"Speed"}
            value={apiHeroStats["speed"]}              
          />
          <StatsCustomize
            name={"Durability"}
            value={apiHeroStats["durability"]}              
          />
          <StatsCustomize
            name={"Power"}
            value={apiHeroStats["power"]}              
          />
          <StatsCustomize
            name={"Combat"}
            value={apiHeroStats["combat"]}        
          />
        </section>
      </section>
    </section>
    </main>

  )
}