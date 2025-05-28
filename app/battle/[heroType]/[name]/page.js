import HeroTypeCard from "@/components/HeroType/HeroTypeCard";
import PagesHeader from "@/components/utils/PagesHeader";

export default function Battle( {name, apiName} ) {

  return (
    <main className={"battlePage"}>
      <PagesHeader title={"BATTLE"} />
      <section>
        <section>
          <h3>{name}</h3>
          <HeroTypeCard 
            // image={heroSelected}
            enableHover={false}
          
          />
        </section>
        <section>

        </section>
        <section>
          <h3>{apiName}</h3>
          <HeroTypeCard 
            // image={ }
            enableHover={false}
          
          />
        </section>
      </section>
      
    </main>

  )
}