import React from "react";
import styles from "./cart.module.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
			<>
				<p>Empty cart!</p>
				<Link to="/">Go to store</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((item) => (
				<ItemCart key={item.id} item={item} />
			))}
		<p>
			Total: ${totalPrice}
		</p>
		</>
	);
};

export default Cart;
