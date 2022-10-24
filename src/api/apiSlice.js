import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
   tagTypes: ['heroes'],
   endpoints: builder => ({
      getHeroes: builder.query({
         query: () => '/heroes',
         providesTags: ['heroes']
      }),
      createHero: builder.mutation({
         query: hero => ({
            url: '/heroes',
            method: 'POST',
            body: hero
         }),
         invalidatesTags: ['heroes']
      }),
      deleteHero: builder.mutation({
         query: id => ({
            url: `/heroes/${id}`,
            method: 'DELETE'
         }),
         invalidatesTags: ['heroes']
      })
   })
})

export const {useGetHeroesQuery, useCreateHeroMutation, useDeleteHeroMutation} = apiSlice;