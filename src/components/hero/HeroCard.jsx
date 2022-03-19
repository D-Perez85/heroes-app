import React from 'react';
import { Link } from 'react-router-dom';

const heroImage = require.context('../../assets/heroes', true); 

const HeroCard = ({
    id,superhero, alter_ego,first_appearance,characters}) => {
      // const imgPath = `../../assets/heroes/${id}.jpg`;



  return(
      <div className='col animate__animated animate__fadeInUp'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img 
            // src={imgPath} 
            src={heroImage(`./${id}.jpg`)}
            className='card-img-top' alt={superhero} />
          </div>
          <div className='col-8'>
              <div className='card-body'>
                  <h5 className='card-title'>{superhero}</h5>
                  <p className='card-text'>{alter_ego}</p>
              {(alter_ego !== characters) && 
                  <p className='text-muted'>{characters}</p>}
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}> 
                Mas...
              </Link>
              </div>
          </div>
        </div>
      </div>
      </div>
  )
};
export default HeroCard;
