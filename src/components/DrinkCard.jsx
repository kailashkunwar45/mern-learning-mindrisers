

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DrinkCard({ drink }) {
  const navigate = useNavigate();
  const { strDrinkThumb, strDrink, idDrink } = drink;

  return (
    <div
      onClick={() => navigate(`/drinks/${idDrink}`)}
      className="cursor-pointer rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
    >
      <img
        src={strDrinkThumb}
        alt={strDrink}
        className="w-full h-[56] object-cover rounded-t-2xl"
      />
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">{strDrink}</h2>
      </div>
    </div>
  );
}
