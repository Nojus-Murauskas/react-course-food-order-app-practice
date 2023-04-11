import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";
import mealImage from "../../assets/meals.jpg";

const MainNavigation = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Meals</h1>

				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes.main_image}>
				<img
					src={mealImage}
					alt='meal'
				/>
			</div>
		</Fragment>
	);
};

export default MainNavigation;
