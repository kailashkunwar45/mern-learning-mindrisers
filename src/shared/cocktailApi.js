


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),

  endpoints: (builder) => ({
    getPopular: builder.query({
      query: () => "filter.php?c=Cocktail",
    }),


    getAlcoholic: builder.query({
      query: () => "filter.php?a=Alcoholic",
    }),


    getNonAlcoholic: builder.query({
      query: () => "filter.php?a=Non_Alcoholic",
    }),


    searchDrinks: builder.query({
      query: (searchTerm) => `search.php?s=${searchTerm}`,
    }),


    getDrinkDetail: builder.query({
      query: (id) => `lookup.php?i=${id}`,
    }),

    getRandomDrink: builder.query({
      query: () => 'random.php',
    }),


  }),
});

export const {
  useGetPopularQuery,
  useGetAlcoholicQuery,
  useGetNonAlcoholicQuery,
  useSearchDrinksQuery,
  useGetDrinkDetailQuery,
  useGetRandomDrinkQuery
} = cocktailApi;
