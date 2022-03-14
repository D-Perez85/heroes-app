import React from "react";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
      <>
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInUp">      
      <ul>
        {heroes.map((value) => {
          return <li key={value.id}>{value.superhero}</li>;
        })}
      </ul>
    </div>
      </>
  );
};

export default HeroList;
