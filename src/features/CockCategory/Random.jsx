import React from 'react';
import { useGetRandomDrinkQuery, } from '../../shared/cocktailApi';
import DrinkCard from '../../components/DrinkCard';

export default function RandomDrink() {
  const { data, error, isLoading } = useGetRandomDrinkQuery

  if (isLoading) return <h1>Loading random drink...</h1>;
  if (error) return <h1>{error.data || error.message}</h1>;

  const drink = data?.drinks?.[0];

  if (!drink) return <h1>No random drink found</h1>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Random Drink</h2>
      <DrinkCard drink={drink} />
    </div>
  );
}
