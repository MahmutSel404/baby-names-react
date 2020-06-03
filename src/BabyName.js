import React from "react";

function BabyName({ data, search }) {
  const filterNames = data.filter((entry) =>
    entry.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="baby-list">
      {filterNames.map((element) => (
        <div className={element.sex} key={element.id}>
          {element.name}
        </div>
      ))}
    </div>
  );
}

export default BabyName;
