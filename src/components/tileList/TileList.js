import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  const array = props.array;
  return (
    <div>
      {array.map((element, index) => (
       <Tile details={element} key={index} />
     ))}
    
      
    </div>
  );
};
