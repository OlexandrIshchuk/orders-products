import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import ordersReducer from './ordersSlice';

const store = configureStore({
	reducer: {
		store: ordersReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
