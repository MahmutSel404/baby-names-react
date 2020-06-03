import React, { useState } from "react";
import BabyName from "./BabyName";
import BabyNamesData from "./babyNamesData.json";
import Search from "./Search";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  BabyNamesData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <div className="name-list">
        <BabyName data={BabyNamesData} search={search} />
      </div>
    </div>
  );
}

export default App;
