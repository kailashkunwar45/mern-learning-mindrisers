import React from 'react';
import { useParams } from 'react-router';
import { useGetDrinkDetailQuery } from '../../shared/cocktailApi';

export default function DrinkDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetDrinkDetailQuery(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data || error.message}</h1>;

  const drink = data?.drinks?.[0];
  if (!drink) return <h1 className='justify-center p-15'>Kei Information Xaina</h1>;

  return (

    <div className="relative max-w-2xl mx-auto p-4 mt-12 rounded-lg overflow-hidden shadow-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-40"
        style={{
          backgroundImage: `url(${drink.strDrinkThumb})`
        }}
        aria-hidden="true"
      />
      <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{drink.strDrink}</h1>
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="rounded-lg mb-4 w-full object-cover"
        />
        <p className="mb-4">{drink.strInstructions}</p>
        <p><strong>Category:</strong> {drink.strCategory}</p>
        <p><strong>Alcoholic:</strong> {drink.strAlcoholic}</p>
        <p><strong>Glass:</strong> {drink.strGlass}</p>
      </div>
    </div>
  );
}
