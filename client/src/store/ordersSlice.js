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
			const productIdsToRemove = action.payload;
			state.products = state.products.filter(product => !productIdsToRemove.includes(product.id));
		},
		setSelectedOrder: (state, action) => {
			state.selectedOrder = action.payload;
		},
		addOrder: (state, action) => {
			state.orders.push(action.payload);
		},
		addProduct: (state, action) => {
			state.products.push(action.payload);
		}
	}
});

export const { setOrders, setProducts, removeOrder, removeProduct, setSelectedOrder, addOrder, addProduct } =
	ordersSlice.actions;

export default ordersSlice.reducer;
