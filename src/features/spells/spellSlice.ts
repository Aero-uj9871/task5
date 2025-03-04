import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/api";
type SpellType = {
  spell: string,
  use: string,
  index: number
}
interface SpellsState {
  spells: SpellType[];

  error: string | null;
}

const initialState: SpellsState = {
  spells: [],

  error: null,
};

export const fetchSpells = createAsyncThunk("spells/fetchSpells", async () => {
  const response = await api.get("/spells");
  return response.data;
});


const spellSlice = createSlice({
  name: "spell",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpells.pending, (state) => {

        state.error = null;
      })
      .addCase(fetchSpells.fulfilled, (state, action) => {

        state.spells = action.payload;
      })
      .addCase(fetchSpells.rejected, (state, action) => {

        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default spellSlice.reducer;