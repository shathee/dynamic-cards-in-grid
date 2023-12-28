"use client";

import { useState } from "react";
import Grid from "../components/Grid";
import ActionBar from "../components/ActionBar";

export default function Home() {
  const shuffleRank = (arr: number[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffleRank(array);

  const cards = [
    { rank: array[0], width: 1, height: 1 },
    { rank: array[1], width: 1, height: 2 },
    { rank: array[2], width: 1, height: 3 },
    { rank: array[3], width: 1, height: 1 },
    { rank: array[4], width: 2, height: 1 },
    // { width: 1, height: 2 }, // 1x1 card
  ];

  const [sortedCardArray, setSortedCardArray] = useState([...cards]);
  const sortedByRank = () => {
    const sortedCards = cards.slice().sort((a, b) => a.rank - b.rank);
    setSortedCardArray(sortedCards);
  };

  return (
    <main
      className=" min-h-screen items-center justify-between p-24"
      suppressHydrationWarning
    >
      {/* // <main className="min-h-screen p-24"> */}
      <Grid cards={sortedCardArray}></Grid>
      <ActionBar sortedByRank={sortedByRank}></ActionBar>
    </main>
  );
}
