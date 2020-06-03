import React from "react";

function Search({search, setSearch}) {
 
  function handleChange(event){
    setSearch(event.target.value)
  }
  return (
    <div>
      <header>
        <input type="text" placeholder="write down name here" value={search}
        onChange={handleChange}
        />
      </header>
    </div>
  );
}
export default Search;
