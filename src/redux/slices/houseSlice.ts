import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/api";

type Houses = {
    house: string;
    emoji: string;
    founder: string;
    colors: string[];
    animal: string;
    index: number;
}

interface HouseState {
    houses: Houses[];

    error: string | null;
}

const initialState: HouseState = {
    houses: [],

    error: null,
};

export const fetchHouses = createAsyncThunk("houses/fetchHouses", async () => {
    const response = await api.get("/houses");
    return response.data;
})


const houseSlice = createSlice({
    name: 'houses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHouses.pending, (state) => {
                state.error = null;
            })
            .addCase(fetchHouses.fulfilled, (state, action) => {
                state.houses = action.payload;
            })
            .addCase(fetchHouses.rejected, (state, action) => {
                state.error = action.error.message || "Something went wrong";
            });
    },

});

export default houseSlice.reducer;