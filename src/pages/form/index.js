import React from "react"
import { Box, Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import Header from "../../components/Header"

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegEx = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g

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
})

function Form() {
    const isNonMobile = useMediaQuery("(min-width:600px)")

    const formik = useFormik({
        onSubmit: (_, actions) => {
            actions.resetForm()
        },
        initialValues: initialValues,
        validationSchema: userSchema,
    })

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
    } = formik

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
                        "& label.Mui-focused": {
                            color: "grey !important",
                        },
                    }}
                >
                    <TextField
                        error={touched.firstName && !!errors.firstName}
                        onBlur={handleBlur}
                        variant="filled"
                        name="firstName"
                        label="First Name"
                        helperText={touched.firstName && errors.firstName}
                        value={values.firstName}
                        onChange={handleChange}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        error={touched.lastName && !!errors.lastName}
                        onBlur={handleBlur}
                        variant="filled"
                        name="lastName"
                        helperText={touched.lastName && errors.lastName}
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        error={touched.email && !!errors.email}
                        onBlur={handleBlur}
                        variant="filled"
                        name="email"
                        helperText={touched.email && errors.email}
                        label="Email"
                        value={values.email}
                        onChange={handleChange}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        error={touched.contact && !!errors.contact}
                        onBlur={handleBlur}
                        variant="filled"
                        name="contact"
                        helperText={touched.contact && errors.contact}
                        label="Contact Number"
                        value={values.contact}
                        onChange={handleChange}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        error={touched.address1 && !!errors.address1}
                        onBlur={handleBlur}
                        variant="filled"
                        name="address1"
                        helperText={touched.address1 && errors.address1}
                        label="Address 1"
                        value={values.address1}
                        onChange={handleChange}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        error={touched.address2 && !!errors.address2}
                        onBlur={handleBlur}
                        variant="filled"
                        helperText={touched.address2 && errors.address2}
                        name="address2"
                        label="Address 2"
                        value={values.address2}
                        onChange={handleChange}
                        sx={{ gridColumn: "span 4" }}
                    />
                </Box>
                <Box display="flex" justifyContent="end" marginTop="20px">
                    <Button sx={{fontSize: "20px"}} color="secondary" variant="contained" type="submit">
                        CREATE NEW USER
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Form
