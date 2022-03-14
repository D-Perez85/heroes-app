import { heroes } from "../data/heroes"; 

export const getHeroesByPublisher = (value) =>{

    const validPublishers = ['DC Comics', 'Marvel Comics']; 
    if(!validPublishers.includes(value)){
        throw new Error ( `${value} is not a valid publisher`); 
    }
    return heroes.filter(hero => hero.publisher === value)
}