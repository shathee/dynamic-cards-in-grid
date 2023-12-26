import Grid from "./components/Grid";

export default function Home() {
  const cards = [
    { width: 1, height: 1 }, // 1x1 card
    { width: 1, height: 2 }, // 2x2 card
    { width: 1, height: 2 }, // 1x1 card
    { width: 1, height: 1 }, // 1x1 card
    { width: 2, height: 1 }, // 1x1 card
    // ... add more cards with different sizes
  ];
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen p-24">
      <Grid cards={cards}></Grid>
    </main>
  );
}
