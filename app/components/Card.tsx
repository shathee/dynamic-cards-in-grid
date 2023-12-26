interface CardProps {
  width: number;
  height: number;
}

const Card: React.FC<CardProps> = ({ width, height }) => {
  const cardStyles = `bg-blue-200 p-4 col-span-${width} row-span-${height} block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`; // Adjust the percentage and styles as needed

  return <div className={cardStyles}>Card</div>;
};

export default Card;
