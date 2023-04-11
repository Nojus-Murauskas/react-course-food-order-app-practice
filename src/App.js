import Card from "./components/UI/Card";
import MainNavigation from "./components/Layout/MainNavigation";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/cartProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};
	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<MainNavigation onShowCart={showCartHandler} />
			<main>
				<Meals />
				<Card />
			</main>
		</CartProvider>
	);
}

export default App;
