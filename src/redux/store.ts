// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "@/features/books/bookSlice";
import characterReducer from  "@/features/characters/characterSlice";
import spellReducer from "@/features/spells/spellSlice";
import houseReducer from "@/features/houses/houseSlice"


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