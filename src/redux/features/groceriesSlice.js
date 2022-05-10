import { createSlice } from "@reduxjs/toolkit";

const groceriesSlice = createSlice({
  name: "groceries",
  initialState: [],
  reducers: {
    loadGroceries: (groceries, action) => [...action.payload],
    addGrocery: (groceries, action) => [...groceries, action.payload],
    deleteGroceries: (groceries, action) =>
      groceries.filter((grocery) => grocery.id !== action.payload.id),
    editGrocery: (groceries, action) =>
      groceries.map((grocery) =>
        grocery.id === action.payload.id
          ? { ...action.payload }
          : { ...grocery }
      ),
  },
});

export default groceriesSlice.reducer;

export const {
  loadGroceries: loadGroceriesActionCreator,
  addGrocery: addGroceryActionCreator,
  deleteGroceries: deleteGroceriesActionCreator,
  editGrocery: editGroceryActionCreator,
} = groceriesSlice.actions;
