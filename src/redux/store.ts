// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "@/redux/slices/bookSlice";
import characterReducer from  "@/redux/slices/characterSlice";
import spellReducer from "@/redux/slices/spellSlice";
import houseReducer from "@/redux/slices/houseSlice"


export const store = configureStore({
  reducer: {
    books: booksReducer, 
    characters:characterReducer,
    spells: spellReducer,
    houses: houseReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;