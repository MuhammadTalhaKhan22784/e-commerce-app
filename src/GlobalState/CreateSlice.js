import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./InitialState";

const cardSlice = createSlice({
  name: "cardFilter",
  initialState: InitialState,
  reducers: {
    dataAtoZ: (state, action) => {
    //   console.log(action.payload);
      const sort = state.cardData.sort((a, b) => {
        //    console.log(a.title,b.price)
        const isR = action.payload === "z-a" ? -1 : 1;
        return isR * a.title.localeCompare(b.title);
      });
      // console.log(sort)
    //   return {...state, cardData:sort}
      state.cardData = sort;
    },
    highToLow: (state, action) => {
      const sort = state.cardData.sort((a, b) => {
        const high = action.payload === "lth" ? a.price-b.price : b.price-a.price;
        return high;
      });
    //   return {...state, cardData : sort}

      state.cardData = sort;
    },
  },
});

export const { dataAtoZ, highToLow } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
