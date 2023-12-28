"use client";
import React from "react";

interface ActionBarProps {
  sortedByRank: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ sortedByRank }) => {
  return (
    <div className="flex items-center justify-center mt-10 pt-25">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={sortedByRank}
      >
        Click me
      </button>
    </div>
  );
};

export default ActionBar;
