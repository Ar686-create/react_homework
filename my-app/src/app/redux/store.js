import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { basketReducer } from "./features/basket";
import { filmsApi } from "./services/filmsApi";
import { filmsReducer } from "./features/films";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    films: filmsReducer,
    [filmsApi.reducerPath]: filmsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsApi.middleware)
});