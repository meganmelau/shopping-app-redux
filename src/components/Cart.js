import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

const Cart = () => {
	const quantity = useSelector((state) => state.cart.totalQuantity);
	const dispatch = useDispatch();
	const showCart = () => {
		// dispatch action who is a function
		dispatch(cartActions.setShowCart());
	};
	return (
		<div className="cartIcon">
			{/* click button to show cart or not */}
			<h3 onClick={showCart}>Cart: {quantity} Items</h3>
		</div>
	);
};

export default Cart;
