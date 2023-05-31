import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
	message: null,
	error: null,
	user: {
		email: '',
		password: ''
	}
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user.email = action.payload.email;
			state.user.password = action.payload.password;
		},
		removeUser: (state, action) => {
			state.user.email = '';
			state.user.password = '';
		},
		registerUserMessage: (state, action) => {
			return produce(state, draft => {
				draft.message = action.payload.message;
				draft.error = action.payload.error;
			});
		}
	}
});

export const { setUser, removeUser, registerUserMessage } = userSlice.actions;
export default userSlice.reducer;
