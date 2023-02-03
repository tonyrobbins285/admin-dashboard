import React, { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

function Topbar() {
	const { toggleColorMode, colors, themeMode } = useContext(ColorModeContext);

	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			<Box
				display="flex"
				backgroundColor={colors.primary[400]}
				borderRadius="3px"
			>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>
				<IconButton sx={{ p: 1 }}>
					<SearchIcon />
				</IconButton>
			</Box>
			<Box display="flex">
				<IconButton onClick={toggleColorMode}>
					{themeMode === "dark" ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<PersonOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
}

export default Topbar;
