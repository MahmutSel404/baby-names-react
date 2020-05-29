import React from "react";
import BabyName from "./BabyName";
import "./App.css";
import BabyNamesData from "./data/babyNamesData.json";

function App() {
  BabyNamesData.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="App">
      <div className="name-list">
        <BabyName data={BabyNamesData} />
      </div>
    </div>
  );
}

export default App;
