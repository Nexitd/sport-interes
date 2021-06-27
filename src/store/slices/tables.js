import { createSlice } from '@reduxjs/toolkit';

export const tablesSlice = createSlice({
	name: 'table',
	initialState: {
	},
	reducers: {
	},
});

export const { login, logout } = tablesSlice.actions;

export default tablesSlice.reducer;