import React from 'react';
import { useGetAlcoholicQuery, useGetPopularQuery } from '../../shared/cocktailApi';
import DrinkList from '../../components/DrinkList';
import SearchInput from '../Search/SearchInput';


export default function AlcoholicDrinks() {
  const { data, error, isLoading } = useGetAlcoholicQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data || error.message}</h1>;

  const drinksData = data?.drinks || [];



  return (
    <div>
      <SearchInput isNav={true} />
      <DrinkList drinks={drinksData} />

    </div>
  );
}
