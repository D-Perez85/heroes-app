import React from "react";
import { useForm } from "../../hooks/useForm";

const Search = () => {
  const[formValues, handleChange, reset] = useForm({
    searchText: '',
  }); 
  const {searchText} = formValues; 

  const handleSubmit = (e) =>{
    console.log(searchText);
    e.preventDefault(); 
    reset(); 
  }

  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {/* {
            (q === '') ? <div className='alert alert-info'>
                Buscar un heroe
            </div> : (heroFiltered.length === 0) && <div className='alert alert-danger'>No hay resultados para: {q}</div>
          } */}

          {/* {heroFiltered.map((value)=>{
            return <HeroCard key={value.id} {...value}/>
          })} */}
        </div>
      </div>
    </>
  );
};
export default Search;
