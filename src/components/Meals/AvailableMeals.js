// import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import useHttpRequest from "../../hooks/use-httpRequest";

const AvailableMeals = () => {
	const url = "https://react-demo-751eb-default-rtdb.europe-west1.firebasedatabase.app/meals.json";
	// custom hook usage
	const meals = useHttpRequest(url);

	if (meals.isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}
	if (meals.error) {
		return (
			<section className={classes.MealsError}>
				<p>{meals.error}</p>
			</section>
		);
	}
	const mealsList = meals.data.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
