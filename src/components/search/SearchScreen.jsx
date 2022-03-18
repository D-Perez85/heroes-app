import React,{useMemo} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../hero/HeroCard";

const Search = () => {
  
  const navigate = useNavigate(); 
  const location = useLocation(); 
  
  const {q = ''} = queryString.parse(location.search);

  const[values, handleChange] = useForm({
    searchText: q,
  }); 

  const {searchText} = values; 
  const heroFiltered = useMemo (() => getHeroesByName(q), [q]); 

  const handleSearch = (e) =>{
     e.preventDefault(); 
     navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Ingrese su busqueda"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-primary mt-3">
              BUSCAR
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '') ? <div className='alert alert-info'>
                Buscar un heroe
            </div> : (heroFiltered.length === 0) && <div className='alert alert-danger'>No hay resultados para: {q}</div>
          }
          {heroFiltered.map((value)=>{
            return <HeroCard key={value.id} {...value}/>
          })}
        </div>
      </div>
    </>
  );
};
export default Search;
