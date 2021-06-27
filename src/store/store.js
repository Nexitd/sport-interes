import { configureStore } from '@reduxjs/toolkit';
import authReducers from './slices/auth';

export default configureStore({
	reducer: {
        auth: authReducers,
	},
});
