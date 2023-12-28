"use client";

import React from "react";
import Card from "./Card";

interface GridProps {
  cards: { rank: number; width: number; height: number }[];
}

const Grid: React.FC<GridProps> = ({ cards }) => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      {/* <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="... border border-gray-400 bg-blue-200 ">01</div>
        <div className="... border border-gray-400 bg-blue-200 ">02</div>
        <div className="... border border-gray-400 bg-blue-200 row-span-3">
          03
        </div>
        <div className="... border border-gray-400 bg-blue-200 ">04</div>
        <div className="... border border-gray-400 bg-blue-200 col-span-2">
          05
        </div>
      </div> */}
    </>
  );
};

export default Grid;
