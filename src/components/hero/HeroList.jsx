import React, {useMemo} from "react";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(()=> getHeroesByPublisher(publisher), [publisher]); 
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInUp">      
        {heroes.map((value) => {
          return <HeroCard key={value.id} {...value}/>
        })}
    </div>
    </>
  );
};
export default HeroList;
