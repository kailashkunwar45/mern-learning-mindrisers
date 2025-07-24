import React from 'react';
import { useGetAlcoholicQuery, useGetNonAlcoholicQuery, useGetPopularQuery } from '../../shared/cocktailApi';
import DrinkList from '../../components/DrinkList';
import SearchInput from '../Search/SearchInput';

export default function NonAlcholicDrinks() {
  const { data, error, isLoading } = useGetNonAlcoholicQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data || error.message}</h1>;

  const drinksData = data?.drinks || [];

  console.log(JSON.stringify(drinksData, null, 2));

  return (
    <div>
      <SearchInput isNav={true} />
      <DrinkList drinks={drinksData} />
    </div>
  );
}