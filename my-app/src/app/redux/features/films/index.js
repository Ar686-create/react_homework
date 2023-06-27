import { createSlice } from '@reduxjs/toolkit';

const Initialstate = {all:[]};

const filmsSlice = createSlice({
  name: 'films',
  initialState: Initialstate,
  reducers: {
    writeData: (state, { payload }) => {
      state.all = payload;
    },
    reset: () => {return Initialstate},
  },
});

export const filmsActions = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
