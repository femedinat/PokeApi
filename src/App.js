import React, {useEffect, useState} from 'react';
import { getPokemon, getPokemonData, searchPokemon } from './api';
import './App.css';
import Navbar from './Components/Navbar';
import Pokedex from './Components/Pokedex';
import Searchbar from './Components/Searchbar';
import { FavoriteProvider } from './Contexts/favoritesContext';

const favoritesKey = "f";
function App() {

  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 24;
  const fetchPokemons = async () => {
    try{
      setLoading(true)
      setNotFound(false)
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const result = await Promise.all((promises))

      setPokemons(result);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    }catch(error){
      console.log("fetchPokemons error:", error);
    }
  }

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  }

  useEffect(() => {
    loadFavoritePokemons()
  
  }, [])

  useEffect(() => {
    fetchPokemons();
  
  }, [page])

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    }else{
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }
const onSearchHandler = async (pokemon) => {
  if(!pokemon){
    return fetchPokemons();
  }
  setLoading(true);
  const result = await searchPokemon(pokemon)
  if(!result){
    setNotFound(true)
  }else{
    setPokemons([result])
    setPage(0)
    setTotalPages(1);
  }
  setLoading(false)
} 

  return (
    <FavoriteProvider
      value={({favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons})}
      >
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
      {notFound ? (
        <div className='not-found-text'> Pokemon não encontrado... </div> 
      ) : 
      (<Pokedex pokemons={pokemons} 
      loading={loading} 
      page={page} 
      setPage={setPage}
      totalPages={totalPages}/> 
      )}
    </div>
    </FavoriteProvider>
  );
}

export default App;
