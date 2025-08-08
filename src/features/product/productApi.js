import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../App/apiUrl.js';


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),


  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      })
    }),




  })



});

export const { useGetProductsQuery } = productApi;