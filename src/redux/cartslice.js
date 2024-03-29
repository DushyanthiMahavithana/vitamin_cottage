'use client'
import {CreateSlice, createSlice} from '@reduxjs/toolkit'

const cartslice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            const { product, selectedSize, selectedNumber, totalForOne  } = action.payload;
            state.push({...product, selectedSize , selectedNumber , totalForOne  });
           // state.push(action.payload)   
        },
        remove(state,action){
            return state.filter((item) => item.id !== action.payload);
        }
    }
})

export const {add, remove} = cartslice.actions;
export default cartslice.reducer;