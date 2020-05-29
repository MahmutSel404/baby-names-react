import React from "react";
import BabyNamesData from "./data/babyNamesData.json";

const BabyName = (props) => {
  return (
    <div className="baby-list">
      {props.data.map((element) => {
        return <div className={element.sex} key={element.id}>{element.name}</div>;
      })}
    </div>
  );
};

export default BabyName;
