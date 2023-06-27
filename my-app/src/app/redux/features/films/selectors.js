import { createSelector } from "reselect";

export const selectAllFilms = (state) => state.films.all;

const search = (state) => state.films.search;

export const selectFiltered = createSelector(selectAllFilms, search, (allFilms, search) =>
  allFilms.filter((film) => film.title.includes(search)),
);