import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import getHeroesById from "../../helpers/getHeroesById";
import { heroImages } from '../../helpers/heroImages';

const Hero = () => {
  const { heroId } = useParams();
  const hero = useMemo( () => getHeroesById(heroId), [heroId] ); 
  const navigate = useNavigate();  
  const handleReturn = (() => navigate(-1));
  if (!hero) { return <Navigate to="/" />}
  const { superhero, publisher, alter_ego, first_appearance, characters } = hero;  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={heroImages(`./${heroId}.jpg`)}
        alt={superhero} 
        className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
            <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
            <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
          </ul>
        <h5 className="mt-3">Characters: </h5><p>{characters}</p>
        <button className="btm btn-outline-primary" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
export default Hero;
