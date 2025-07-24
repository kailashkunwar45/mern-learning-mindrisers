import React from 'react';
import DrinkCard from './DrinkCard';

export default function DrinkList({ drinks }) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-5'>
      {drinks?.map((drink) => (
        <DrinkCard
          key={drink.idDrink}
          drink={drink}
        />
      ))}
    </div>
  );
}


