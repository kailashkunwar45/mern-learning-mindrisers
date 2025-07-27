import React from 'react'
import { useGetPopularQuery, useGetRandomDrinkQuery } from '../shared/cocktailApi.js'
import SearchInput from '../features/Search/SearchInput.jsx';
import DrinkList from '../components/DrinkList.jsx';

export default function HomePage() {
  const { data, error, isLoading } = useGetPopularQuery();
  const { data2, error2, isLoading2 } = useGetRandomDrinkQuery();

  if (isLoading || isLoading2) return <h1>Loading...</h1>
  if (error || error2) return <h1>Error</h1>

  const popularDrinks = data?.drinks || [];
  const randomDrink = data2?.drinks ? [data2.drinks[0]] : [];

  return (
    <div className="max-w-7xl mx-auto p-5">
      <SearchInput isNav={true} />

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Popular Drinks</h2>
        <DrinkList drinks={popularDrinks} />
      </section>

      <section className="my-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Random Drink</h2>
        <DrinkList drinks={randomDrink} />
      </section>
    </div>
  )
}
