// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    plan: null,
};

const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        setPlan: (state, action) => {
            state.plan = action.payload;
        },
    },
});

export const { setPlan } = planSlice.actions;
export default planSlice.reducer;
