import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/api";

type Character = {
  fullName: string;
  nickname: string;
  hogwartsHouse: string;
  interpretedBy: string;
  children: string[];
  image: string;
  birthdate: string;
  index: number;
};

interface CharacterState {
  characters: Character[];
  error: string | null;
}

const initialState: CharacterState = {
  characters: [],
  error: null,
};



// Thunk: fetch data from api
export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async () => {
  const response = await api.get("/characters");
  return response.data;
});

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {

        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {

        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {

        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default characterSlice.reducer;