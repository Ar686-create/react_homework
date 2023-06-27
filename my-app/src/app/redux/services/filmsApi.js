import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: (builder) => ({
    getCinemas: builder.query({
      query: () => `cinemas`,
    }),
    getFilmsInCinema: builder.query({
      query: (id) => `movies?cinemaId=${id}`,
    }),
    getFilms: builder.query({
      query: () => 'movies',
      providesTags: ['films'],
    }),
    getOneFilm: builder.query({
      query: (id) => `movie?movieId=${id}`,
    }),
    getReviewToFilm: builder.query({
      query: (id) => `reviews?movieId=${id}`,
    }),
  }),
});

export const {useGetFilmsQuery, useGetOneFilmQuery, useGetReviewToFilmQuery} = filmsApi;