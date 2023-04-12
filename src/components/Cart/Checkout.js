import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [fromInputValidity, setFromInputValidity] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});

	const NameInputRef = useRef();
	const StreetInputRef = useRef();
	const PostalCodeInputRef = useRef();
	const CityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = NameInputRef.current.value;
		const enteredStreet = StreetInputRef.current.value;
		const enteredPostalCode = PostalCodeInputRef.current.value;
		const enteredCity = CityInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredCityIsValid = !isEmpty(enteredCity);
		const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

		setFromInputValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postalCode: enteredPostalCodeIsValid,
		});

		const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

		if (!formIsValid) {
			return;
		}

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
        })
	};

	const nameControlClasses = `${classes.control} ${fromInputValidity.name ? "" : classes.invalid}`;
	const streetControlClasses = `${classes.control} ${fromInputValidity.street ? "" : classes.invalid}`;
	const postalCodeControlClasses = `${classes.control} ${fromInputValidity.postalCode ? "" : classes.invalid}`;
	const cityControlClasses = `${classes.control} ${fromInputValidity.city ? "" : classes.invalid}`;

	return (
		<form
			className={classes.form}
			onSubmit={confirmHandler}
		>
			<div className={nameControlClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					ref={NameInputRef}
				/>
				{!fromInputValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor='street'>Street</label>
				<input
					type='text'
					id='street'
					ref={StreetInputRef}
				/>
				{!fromInputValidity.street && <p>Please enter a valid street!</p>}
			</div>
			<div className={postalCodeControlClasses}>
				<label htmlFor='postal'>Postal Code</label>
				<input
					type='text'
					id='postal'
					ref={PostalCodeInputRef}
				/>
				{!fromInputValidity.postalCode && <p>Please enter a valid Postal Code! (5 characters)</p>}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor='city'>City</label>
				<input
					type='text'
					id='city'
					ref={CityInputRef}
				/>
				{!fromInputValidity.city && <p>Please enter a valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button
					type='button'
					onClick={props.onCancel}
				>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
