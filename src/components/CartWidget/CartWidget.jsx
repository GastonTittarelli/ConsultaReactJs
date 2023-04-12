import React from "react";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
	const { totalProducts } = useCartContext();
	return <div>
        <i></i>
        <span>{totalProducts() || ""}</span>
    </div>;
};

export default CartWidget;
