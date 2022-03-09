import React, { useState } from "react";

const Searchbar = (props) => {
  const [search, setSearch] = useState();
  const {onSearch} = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if(e.target.value.length === 0){
      onSearch(undefined)
    }
  };

  const onButtonClickHandle = () => {
    onSearch(search);
  };

  return (
    <div>
      <div className="searchbar-container">
          <div className="searchbar">
          <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
        </div>
        <div className="searchbar-btn">
          <button onClick={onButtonClickHandle}>Buscar</button>
        </div>
        
      </div>

      
    </div>
  );
};

export default Searchbar;
