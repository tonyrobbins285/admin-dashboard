import React, { useState } from "react"
import Header from "../../components/Header"
import { Box, ListItem } from "@mui/material"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import Collapse from "@mui/material/Collapse"
import { mockDataFaq } from "../../data/mockData"

function Faq() {
    const [open, setOpen] = useState(
        mockDataFaq.map((data) => ({ ...data, open: false }))
    )

    function handleClick(event) {
        setOpen((prevData) =>
            prevData.map((data) => {
                if (
                    data.question === event.question &&
                    data.answer === event.answer
                ) {
                    return { ...event, open: !event.open }
                }
                return data
            })
        )
    }

    const listItems = open.map((data, i) => (
        <Box display="flex" key={i} >
            <ListItemButton onClick={() => handleClick(data)}>
                <ListItemText primary={data.question} />
                {data.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={data.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={data.answer} />
                    </ListItemButton>
                </List>
            </Collapse>
        </Box>
    ))

    return (
        <Box m="10px 20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Box height="75vh" m="40px 0 0 0">
                <List>{listItems}</List>
            </Box>
        </Box>
    )
}

export default Faq
