import { createSlice } from "@reduxjs/toolkit";

const cartState = {
	itemsList: [],
	totalQuantity: 0,
	showCart: false,
	changed: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartState,
	reducers: {
		addToCart(state, action) {
			// state.changed = true;
			console.log("ADD TO CART", state.itemsList);
			const newItem = action.payload;
			// to check if item is already available
			const existingItem = state.itemsList.find(
				(item) => item.id === newItem.id
			);

			if (existingItem) {
				existingItem.quantity++;
				existingItem.totalPrice += newItem.price;
			} else {
				state.itemsList.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
				});
				state.totalQuantity++;
			}
		},
		removeFromCart(state, action) {
			state.pop();
		},
		setShowCart(state) {
			state.showCart = true;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
