import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6878a22f63f24f1fdc9ec3af.mockapi.io/blogs'
  }),

  endpoints: (builder) => ({

    getBlogs: builder.query({
      query: () => ({
        url: '/blogs',
        method: 'GET'

      })
    }),

    addBlog: builder.mutation({
      query: () => ({
        url: '/blogs',
        body: data,
        method: 'POST'

      })
    })

  })

});

export const { useGetBlogsQuery, useLazyGetBlogsQuery } = blogApi;
