import React, {useState} from "react";
import InfoPoke from "./InfoPoke";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;
  const [infoPoke, setInfoPoke] = useState(false);
  const [infoPokeData, setInfoPokeData] = useState();

  const onLeftClickHandler = () => {
      if(page > 0){
        setPage(page-1);
      }
  }
  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
        setPage(page+1);
      }
  }

  const onClickInfoPoke = (click, pokemon) => {
    setInfoPoke(click)
    setInfoPokeData(pokemon)
    console.log(infoPokeData)
  }

  return (
    <div className="pokedex-container">
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination 
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}/>
      </div>
      {loading ? (
        <div className='not-found-text'>Carregando, segura ai!...</div>
      ) : !infoPoke ? (
        <div className="pokedex-grid">
            {pokemons.map((pokemon, index) => {
                  return (
                      <Pokemon key={index} pokemon={pokemon} onClickInfoPoke={onClickInfoPoke} />
                  )
              }
              )}
        </div>
      ) :  (
        <InfoPoke pokemon={infoPokeData} onClickInfoPoke={onClickInfoPoke} setInfoPoke={setInfoPoke}/>
      )}
    </div>
  );
};

export default Pokedex;
