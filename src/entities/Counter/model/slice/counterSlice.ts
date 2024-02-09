import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 10,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            console.log('@COUNTER INCREMENT');
        },
        decrement: (state) => {
            state.value -= 1;
            console.log('@COUNTER DECREMENT');
        },
    },
});

export const { actions: countActions } = counterSlice;
export const { reducer: countReducer } = counterSlice;
