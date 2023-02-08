import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { ColorModeContext } from "../../theme";
function Team() {
	const { colors } = useContext(ColorModeContext);
	const columns = [
		{ field: "id", headerName: "ID" },
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "age",
			headerName: "Age",
			headerAlign: "left",
			align: "left",
			type: "number",
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
		{
			field: "access",
			headerName: "Access Level",
			flex: 1,
			headerAlign: "center",
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width="60%"
						m="0 auto"
						p="5px"
						display="flex"
						justifyContent="center"
						backgroundColor={
							access === "admin"
								? colors.greenAccent[600]
								: colors.greenAccent[700]
						}
						borderRadius="4px"
					>
						{access === "admin" && <AdminPanelSettingsOutlinedIcon />}
						{access === "manager" && <SecurityOutlinedIcon />}
						{access === "user" && <LockOpenOutlinedIcon />}
						<Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
							{access.toUpperCase()}
						</Typography>
					</Box>
				);
			},
		},
	];

	return (
		<Box m="10px 20px">
			<Header title="TEAM" subtitle="Managing the Team Members" />
			<Box
				height="75vh"
				m="40px 0 0 0"
				sx={{
					"& .MuiDataGrid-footerContainer": {
						border: "none",
						backgroundColor: colors.blueAccent[700],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						border: "none",
					},
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-iconSeparator": {
						display: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-cell": {
						border: "none !important",
					},
					"& .name-column--cell": {
						color: colors.greenAccent[300],
					},
				}}
			>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	);
}

export default Team;
