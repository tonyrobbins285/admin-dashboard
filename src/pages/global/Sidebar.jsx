import React, { useState, useContext } from "react";
import { Sidebar as SidebarPro, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function Item({ icon, prefix, component, active, selected, setSelected }) {
	return (
		<MenuItem
			active={prefix === selected}
			prefix={prefix}
			component={component}
			icon={icon}
			onClick={() => setSelected(prefix)}
		></MenuItem>
	);
}

function Sidebar() {
	const { colors } = useContext(ColorModeContext);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState("Dashboard");
	return (
		<Box
			sx={{
				"& .ps-sidebar-root": {
					border: "none",
					height: "100vh",
				},
				"& .ps-menu-root": {
					padding: "30px 0 0 0",
				},
				"& .ps-active": {
					color: "#6870fa",
				},
				h6: {
					color: colors.grey[300],
					margin: "0 20px",
				},
			}}
		>
			<SidebarPro
				backgroundColor={`${colors.primary[400]}`}
				defaultCollapsed={isCollapsed}
				transitionDuration={500}
				rootStyles={{
					".ps-menuitem-root": {
						padding: { isCollapsed } ? "0" : "0 10px",
					},
				}}
			>
				<Menu
					menuItemStyles={{
						button: ({ level }) => {
							if (level === 0) {
								return {
									":hover": {
										color: "#868dfb",
										background: "inherit",
									},
								};
							}
						},
					}}
				>
					<Box
						display="flex"
						color={colors.grey[100]}
						alignItems="center"
						justifyContent={isCollapsed ? "center" : "space-between"}
						margin={isCollapsed ? "0" : "0 20px 0 30px"}
					>
						{!isCollapsed && (
							<Typography variant="h3" color={colors.grey[100]}>
								ADMINIS
							</Typography>
						)}
						<IconButton
							onClick={() => setIsCollapsed((prevState) => !prevState)}
						>
							<MenuOutlinedIcon />
						</IconButton>
					</Box>

					{!isCollapsed && (
						<Box
							height="180px"
							display="flex"
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
							mb="20px"
						>
							<img
								alt="profile-user"
								height="100px"
								width="100px"
								src={`../../assets/user.png`}
							/>
							<Typography
								variant="h2"
								color={colors.grey[100]}
								fontWeight="bold"
								sx={{ m: "10px 0 0 0" }}
							>
								Ed Roh
							</Typography>
							<Typography variant="h5" color={colors.greenAccent[500]}>
								VP Fancy Admin
							</Typography>
						</Box>
					)}
					<Item
						prefix="Dashboard"
						component={<Link to="/" />}
						icon={<HomeOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Typography variant="h6">Data</Typography>
					<Item
						prefix="Manage Team"
						component={<Link to="/team" />}
						icon={<PeopleOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Item
						prefix="Contacts Infomation"
						component={<Link to="/contacts" />}
						icon={<ContactsOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Item
						prefix="Invoices Balances"
						component={<Link to="/invoices" />}
						icon={<ReceiptOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Typography variant="h6">Pages</Typography>
					<Item
						prefix="Profile Form"
						component={<Link to="/form" />}
						icon={<PersonOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Item
						prefix="Calendar"
						component={<Link to="/calendar" />}
						icon={<CalendarTodayOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Item
						prefix="FAQ Page"
						component={<Link to="/faq" />}
						icon={<HelpOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Typography variant="h6">Charts</Typography>
					<Item
						prefix="Bar Chart"
						component={<Link to="/bar" />}
						icon={<BarChartOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Item
						prefix="Pie Chart"
						component={<Link to="/pie" />}
						icon={<PieChartOutlineOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Item
						prefix="Line Chart"
						component={<Link to="/line" />}
						icon={<TimelineOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
					<Item
						prefix="Geography Chart"
						component={<Link to="/geography" />}
						icon={<MapOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					></Item>
				</Menu>
			</SidebarPro>
		</Box>
	);
}

export default Sidebar;
