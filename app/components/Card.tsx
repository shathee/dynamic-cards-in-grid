interface CardProps {
  width: number;
  height: number;
}

const Card: React.FC<CardProps> = ({ width, height }, index) => {
  const cardStyles = `border border-gray-400 bg-blue-200 p-4 col-span-${width} row-span-${height} `; // Adjust the percentage and styles as needed

  return (
    <div className={cardStyles}>
      Card-{index} W: {width} X H: {height}
    </div>
  );
};

export default Card;
