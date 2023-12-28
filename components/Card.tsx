"use client";
interface CardProps {
  width: number;
  height: number;
  rank: number;
}

const Card: React.FC<CardProps> = ({ rank, width, height }) => {
  const cardStyles = `block rounded-lg bg-white border border-gray-400 bg-blue-200 p-4 col-span-${width} row-span-${height} `; // Adjust the percentage and styles as needed

  return (
    <div className={cardStyles}>
      Card-{rank} W: {width} X H: {height}
    </div>
  );
};

export default Card;
