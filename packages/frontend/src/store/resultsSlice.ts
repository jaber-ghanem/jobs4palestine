// frontend/store/resultsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IResultBase } from '@monorepo/shared';

interface ResultsState {
    [specialty: string]: IResultBase[];
}

const initialState: ResultsState = {};

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setResultsBySpecialty: (state, action: PayloadAction<{ specialty: string; results: IResultBase[] }>) => {
            state[action.payload.specialty] = action.payload.results;
        },
        clearResults: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
        },
    },
});

export const { setResultsBySpecialty, clearResults } = resultsSlice.actions;
export default resultsSlice.reducer;
