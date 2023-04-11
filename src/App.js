import Card from "./components/UI/Card";
import MainNavigation from "./components/Layout/MainNavigation";
import Meals from "./components/Meals/Meals";

function App() {
	return (
		<>
			<MainNavigation />
			<main>
        <Meals/>
				<Card />
			</main>
		</>
	);
}

export default App;
