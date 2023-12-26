import React from "react";
import Card from "./Card";

interface GridProps {
  cards: { width: number; height: number }[];
}

const Grid: React.FC<GridProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Grid;
