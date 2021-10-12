import React from "react";
//receives details
export const Tile = (props) => {
  
  
  const values = Object.values(props.details);
  return (
    <div className="tile-container">
     {values.map((value, index) => <p key={index} className={ index === 0 ? 'tile-title' : 'tile' }>
     {value}</p>)}
    </div>
  );
};
