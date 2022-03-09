import React,  {useContext} from "react";
import FavoriteContext from "../Contexts/favoritesContext";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);
    const {pokemon, onClickInfoPoke} = props;
    
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
        
    }

    const onClickImg = () => {
        onClickInfoPoke(true, pokemon)
    }
    
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
        <>
        <div className="pokemon-card" >
            <div className="pokemon-image-container">
                <button className="pokemon-heart-btn" onClick={onClickImg} >
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-img" />
                </button>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3 >{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
        </>
        
        
    )
}

export default Pokemon;