import React, {useContext} from "react"
import FavoriteContext from "../Contexts/favoritesContext";

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext);

    const logoUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
            <nav>
                <div>
                    <img alt="poke_logo" className="nav-img" src={logoUrl}/>
                </div>
                <div className="nav-text"> ❤️ {favoritePokemons.length} | Favoritos</div>    
            </nav>
    )
}

export default Navbar;