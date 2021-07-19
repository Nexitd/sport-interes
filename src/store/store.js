import { configureStore } from '@reduxjs/toolkit';
import authReducers from './slices/auth';
import footballReducers from './slices/football';

export default configureStore({
	reducer: {
		auth: authReducers,
		football: footballReducers,
	},
});
