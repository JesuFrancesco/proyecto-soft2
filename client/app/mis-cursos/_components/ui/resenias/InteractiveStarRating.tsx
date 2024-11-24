"use client";
import React from "react";
import { Star } from "lucide-react";

interface InteractiveStarRatingProps {
  title: string;
  value: number;
  onChange: (newValue: number) => void;
}

const InteractiveStarRating = ({
  title,
  value,
  onChange,
}: InteractiveStarRatingProps) => {
  const handleClick = (index: number) => {
    onChange(index + 1);
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <span className="text-sm font-medium">{title}</span>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer ${
              index < value ? "fill-yellow-500 text-yellow-500" : "text-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveStarRating;
