import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	contact: "",
	address1: "",
	address2: "",
};

const phoneRegEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const userSchema = yup.object().shape({
	firstName: yup.string().required("Required"),
	lastName: yup.string().required("Required"),
	email: yup
		.string()
		.email("Invalid email adress")
		.required("required"),
	contact: yup
		.string()
		.matches(phoneRegEx, "Phone number is not valid")
		.required("required"),
	address1: yup.string().required("required"),
	address2: yup.string().required("required"),
});

function InputField({
	label,
	name,
	helperText,
	gridColumn,
	value,
	handleChange,
}) {
	return (
		<TextField
			error={value ? false : true}
			name={name}
			label={label}
			helperText={value ? undefined : helperText}
			value={value}
			variant="filled"
			onChange={handleChange}
			sx={{ gridColumn: gridColumn }}
		/>
	);
}

function Form() {
	const isNonMobile = useMediaQuery("(min-width:600px)");

	function handleFormSubmit(values) {
		console.log(values);
	}

	const formik = useFormik({
		onSubmit: handleFormSubmit,
		initialValues: initialValues,
		validationSchema: userSchema,
	});

	const {
		values,
		errors,
      touched,
		handleBlur,
		handleChange,
		handleSubmit,
	} = formik;

	console.log(formik);

	return (
		<Box m="10px 20px">
			<Header title="CREATE USER" subtitle="Create a New User Profile" />
			<form onSubmit={handleSubmit}>
				<Box
					m="40px 0 0 0"
					height="50vh"
					display="grid"
					gap="30px"
					gridTemplateColumns="repeat(4, minmax(0, 1fr))"
					sx={{
						"& > div": {
							gridColumn: isNonMobile ? undefined : "span 4",
						},
					}}
				>
					<InputField
						name="firstName"
						label="First Name"
						helperText="Required"
						gridColumn="span 2"
						value={values.firstName}
						handleChange={handleChange}
					/>
					<InputField
						name="lastName"
						label="Last Name"
						helperText="Required"
						gridColumn="span 2"
						value={values.lastName}
						handleChange={handleChange}
					/>
					<InputField
						name="email"
						label="Email"
						helperText="Invalid Email"
						gridColumn="span 4"
						value={values.email}
						handleChange={handleChange}
					/>
					<InputField
						name="contact"
						label="Contact Number"
						helperText="Invalid Phone number"
						gridColumn="span 4"
						value={values.contact}
						handleChange={handleChange}
					/>
					<InputField
						name="address1"
						label="Address 1"
						helperText="Required"
						gridColumn="span 4"
						value={values.address1}
						handleChange={handleChange}
					/>
					<InputField
						name="address2"
						label="Address 2"
						helperText="Required"
						gridColumn="span 4"
						value={values.address2}
						handleChange={handleChange}
					/>
					<Button
						variant="contained"
						type="submit"
						sx={{ gridColumn: "4", justifySelf: "right" }}
						onSubmit={handleSubmit}
					>
						CREATE NEW USER
					</Button>
				</Box>
			</form>
		</Box>
	);
}

export default Form;
