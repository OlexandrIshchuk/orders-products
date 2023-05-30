import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	orders: [],
	products: [],
	selectedOrder: 0
};

const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		setOrders: (state, action) => {
			state.orders = action.payload;
		},
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		removeOrder: (state, action) => {
			state.orders = state.orders.filter(order => order.id !== action.payload);
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(product => product.id !== action.payload);
		},
		setSelectedOrder: (state, action) => {
			state.selectedOrder = action.payload;
		}
	}
});

export const { setOrders, setProducts, removeOrder, removeProduct, setSelectedOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
