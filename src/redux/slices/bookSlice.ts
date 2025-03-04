import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/api";

type Book = {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
};

interface BookState{
  books: Book[];
  error: string | null;
}

const initialState: BookState={
    books:[],
    error:null,
};



// Thunk for feching data from api
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await api.get("/books");
  return response.data; 
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {}, //add local reducers here
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default bookSlice.reducer;