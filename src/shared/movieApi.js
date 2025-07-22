import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),


  endpoints: (builder) => ({


    getNowPlaying: builder.query({
      query: () => ({
        url: '/movie/now_playing',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    }),
    getPopular: builder.query({
      query: () => ({
        url: '/movie/popular',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    }),
    getTopRated: builder.query({
      query: () => ({
        url: '/movie/top_rated',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    }),
    getUpcoming: builder.query({
      query: () => ({
        url: '/movie/upcoming',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    }),

    getSearchMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        params: {
          query: query,
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    })




  })



})

export const { useGetNowPlayingQuery, useGetPopularQuery, useGetTopRatedQuery, useGetUpcomingQuery, useGetSearchMovieQuery } = movieApi;