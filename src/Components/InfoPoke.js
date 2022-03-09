import React from "react";

const InfoPoke = (props) => {
    const { pokemon, setInfoPoke } = props;

    const closeInfo = () => {
        setInfoPoke(false);
    }
    return (
        <>
        <div className="button-close-info">
            <button onClick={closeInfo}>X</button>
        </div>
        <div className="container-info">
            <div className="container-status">
                <div className="container-info-img">
                    <img className="info-img" alt={pokemon.name} src={pokemon.sprites.other.home.front_default}></img> 
                    <h1>{pokemon.name}</h1>
                </div>
                <div className="container-info-status">
                    {pokemon.stats.map((status, index) => {
                        return(
                            <p key={index}>{status.stat.name}: {status.base_stat}</p>
                        )
                    })}
                </div>
            </div>
            <div className="container-dados">
                <div className="dados">
                <h3>Habilidades:</h3>
                {
                    pokemon.abilities.map((abilitie, index) =>{
                        return(
                            <p key={index}>{abilitie.ability.name}</p>
                        )
                    })
                }
                </div>
                <div className="dados">
                    <h3>Tipo:</h3>
                    {
                        pokemon.types.map((type, index) =>{
                            return(
                                <p key={index}>{type.type.name}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default InfoPoke;