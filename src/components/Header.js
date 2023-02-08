import React from "react";
import { Typography, Box } from "@mui/material";

function Header({ title, subtitle }) {
	return (
		<Box>
			<Typography variant="h1">{title}</Typography>
			<Typography variant="h6">{subtitle}</Typography>
		</Box>
	);
}

export default Header;
