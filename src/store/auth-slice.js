import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = false;

const authSlice = createSlice({
	name: "auth",
	initialState: { isLoggedIn },
	reducers: {
		login(state) {
			console.log("logged in");
			state.isLoggedIn = true;
		},
		logout(state) {
			state.isLoggedIn = false;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
