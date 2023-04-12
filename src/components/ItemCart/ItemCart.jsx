import React from "react";
import styles from "./itemCart.module.css";
import { useCartContext } from "../../context/CartContext";


const Cart = ({product}) => {
	const {removeProduct} = useCartContext();
	return (
		<div className={styles.cart}>
			<img src={product.image} alt={product.title} />
			<div>
				<p>Título: {product.title}</p>
				<p>Cantidad: {product.quantity}</p>
				<p>Precio u.: {product.price}</p>
				<p>Subtotal: ${product.quantity * product.price} </p>
				<button onClick={() => removeProduct(product.id)}>Eliminar</button>
			</div>
		</div>
	);
};

export default Cart;