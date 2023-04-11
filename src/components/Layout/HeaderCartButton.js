import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
	return (
		<div>
			<button className={classes.button}>
				<span className={classes.icon}><CartIcon/></span>
				<span>Your Card</span>
				<span className={classes.badge}>5</span>
			</button>
		</div>
	);
};

export default HeaderCartButton;
