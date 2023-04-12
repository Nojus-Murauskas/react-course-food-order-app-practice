import { useEffect, useState } from "react";

const useHttpRequest = (url) => {
	const [request, setRequest] = useState({
		isLoading: false,
		error: null,
		data: [],
	});

	useEffect(() => {
		setRequest({
			isLoading: true,
			error: null,
			data: [],
		});
		const fetchMeals = async () => {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
            
			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setRequest({
				isLoading: false,
				error: null,
				data: loadedMeals,
			});
		};
		fetchMeals().catch((error) => {
			setRequest({
				isLoading: false,
				error: error.message,
				data: [],
			});
		});
	}, [url]);
	return request;
};

export default useHttpRequest;
