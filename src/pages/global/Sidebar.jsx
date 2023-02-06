import React, { useState, useContext } from "react"
import {
    ProSidebarProvider,
    sidebarClasses,
    Sidebar,
    Menu,
    MenuItem,
} from "react-pro-sidebar"
import { Box, IconButton, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { ColorModeContext } from "../../theme"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"

function Sidebarx() {
    const { colors, themeMode } = useContext(ColorModeContext)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState("Dashboard")
    console.log(sidebarClasses.root)
    return (
        <ProSidebarProvider
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    border: "2px red solid",
                },
                [`.${sidebarClasses.root}`]: {
                    border: "2px black solid !important",
                },
            }}
        >
            <Sidebar
                backgroundColor={`${colors.primary[400]}`}
                collapsedWidth="50px"
                defaultCollapsed={isCollapsed}
                transitionDuration={2000}
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        border: "2px red solid",
                    },
                    [`.${sidebarClasses.root}`]: {
                        border: "2px black solid !important",
                    },
                }}
            >
                {/* //     <Menu
            //         className="pro-sidebar-wrapper"
            //         style={{ backgroundColor: "transparent" }}
            //     >
            //         <MenuItem style={{ background: colors.primary[400] }} />
            //         <MenuItem
            //             className="pro-inner-item"
            //             style={{ padding: "5px 35px 5px 20px" }}
            //         />
            //         <MenuItem
            //         // className="pro-inner-item"
            //         // style={{ padding: "5px 35px 5px 20px" }}
            //         // onMouseOver={{ color: "black" }}
            //         />
            //         <MenuItem
            //             className="pro-menu-item active"
            //             style={{ color: "white" }}
            //         />
            //     </Menu> */}
            </Sidebar>
        </ProSidebarProvider>
    )
}

export default Sidebarx
{
    /* <Box
    sx={{"& .pro-sidebar-inner": {
        background: `${colors.primary[400]}` !important
    },
    "& .pro-sidebar-wrapper": {
        backgroundColor: "transparent !important"
    },
    "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important"
    }
    "& .pro-inner-item:hover": {
        color: "black"
    }
    "& .pro-menu-item.active": {
        color: "white"
    }
    }}>

</Box> */
}

// <Sidebar
//                     width="300px"
// rootStyles={{
//     [`.${sidebarClasses.container}`]: {
//         backgroundColor: `${colors.primary[400]}`,
//     },
// }}
//                 >
//                     <Menu>
//                         <MenuItem> Documentation</MenuItem>
//                         <MenuItem> Calendar</MenuItem>
//                         <MenuItem> E-commerce</MenuItem>
//                         <MenuItem> Examples</MenuItem>
//                     </Menu>
//                 </Sidebar>
