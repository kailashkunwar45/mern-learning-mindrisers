


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const blogApi = createApi({
  reducerPath: 'blogApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://687a1c05abb83744b7eb7786.mockapi.io' }),

  endpoints: (builder) => ({

    getBlogs: builder.query({
      query: () => ({
        url: '/blogs',
        method: 'GET'
      }),
      providesTags: ['Blogs']

    }),

    getBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'GET'
      }),
      providesTags: ['Blogs']
    }),

    updateBlog: builder.mutation({
      query: (q) => ({
        url: `/blogs/${q.id}`,
        body: q.data,
        method: 'PATCH'
      }),
      invalidatesTags: ['Blogs']
    }),

    addBlog: builder.mutation({
      query: (data) => ({
        url: '/blogs',
        body: data,
        method: 'POST'
      }),
      invalidatesTags: ['Blogs']
    }),

    removeBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Blogs']

    })

  })


});

export const { useGetBlogsQuery, useLazyGetBlogsQuery, useAddBlogMutation, useRemoveBlogMutation, useGetBlogQuery, useUpdateBlogMutation } = blogApi;