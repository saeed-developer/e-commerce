import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({ //I think threre is no need to export 
    name: 'counter',
    initialState: {
      amount:{},
      total:0,
      discount :{}
    },
    reducers: {
      increment: (state,action) => {
        
        state.total += action.payload
      },
      decrement: (state,action) => {
        if(state.total>0){
        state.total -= action.payload
      }
      },

      itemAmount:(state,action)=>{
      state.amount =  action.payload
    },
    discount : (state, action)=>{
      state.discount = action.payload
    }
   
    },
      
    
  })
  
  export const { increment, decrement, itemAmount,discount} = counterSlice.actions
  
  export default counterSlice.reducer