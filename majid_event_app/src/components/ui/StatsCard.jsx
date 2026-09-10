import React from "react";

const StatsCard = ({ title, value, color = "indigo" }) => {
  const textColorClass =
    color === "indigo"
      ? "text-indigo-600"
      : color === "green"
        ? "text-green-600"
        : `text-blue-600`;
  return (
    <div className="bg-indigo-800/20 p-4 rounded-lg shadow-md border border-gray-200/30">
      <h3 className={`text-xl md:text-2xl font-bold ${textColorClass}`}>{value}</h3>
      <p className="text-base text-gray-200 mt-3">{title}</p>
    </div>
  );
};

export default StatsCard;
