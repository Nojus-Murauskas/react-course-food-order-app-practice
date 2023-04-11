import classes from "./Cart.module.css";
const Cart = (props) => {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[{ id: "1", name: "Beans", amount: 56, price: 5.66 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<div>
			{cartItems}
			<div className={classes.total}>
                <span>Total Amount</span>
                <span>566</span>
            </div>
			<div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
		</div>
	);
};

export default Cart;
