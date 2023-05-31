import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import ordersReducer from './ordersSlice';
import userReducer from './userSlice';

const store = configureStore({
	reducer: {
		store: ordersReducer,
		auth: userReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
