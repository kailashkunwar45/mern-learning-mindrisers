import React from 'react';
import { useGetPopularQuery } from '../../shared/cocktailApi';
import DrinkList from '../../components/DrinkList';
import SearchInput from '../Search/SearchInput';

export default function PopularDrinks() {
  const { data, error, isLoading } = useGetPopularQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data || error.message}</h1>;

  const drinksData = data?.drinks || [];

  console.log(JSON.stringify(drinksData, null, 2));

  return (
    <div>
      <SearchInput isNav={true} />
      {data && <DrinkList drinks={data.drinks} />}
    </div>
  );
}
