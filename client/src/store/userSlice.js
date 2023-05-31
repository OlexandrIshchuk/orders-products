import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
		}
	}
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
