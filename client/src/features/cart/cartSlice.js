import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({ //I think threre is no need to export 
    name: 'counter',
    initialState: {
      item: [],
      total:0
    },
    reducers: {
      increment: (state,action) => {
        state.total += action.payload
      },
      decrement: (state,action) => {
        state.item -= action.payload
      },
      addNewItem: (state, action) => {
        state.item = [...state.item, action.payload ]
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, addNewItem } = counterSlice.actions
  
  export default counterSlice.reducer