import React, { useState, useContext } from "react"
import Header from "../../components/Header"
import { Box, Typography } from "@mui/material"
import { formatDate } from "@fullcalendar/core"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from "@fullcalendar/list"
import interactionPlugin from "@fullcalendar/interaction"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { ColorModeContext } from "../../theme"

function Calendar() {
    const { colors } = useContext(ColorModeContext)
    const [currentEvents, setCurrentEvents] = useState([])
    return (
        <Box m="10px 20px">
            <Header
                title="Calendar"
                subtitle="Full Calendar Interactive Page"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                display="flex"
                justifyContent="space-between"
            >
                <Box
                    bgcolor={colors.primary[400]}
                    borderRadius="10px"
                    flex="1 1 20%"
                    mr="20px"
                    padding="10px"
                >
                    <Typography variant="h3" textAlign="center">
                        Events
                    </Typography>
                    <List
                        sx={{
                            "& .MuiListItemText-primary": {
                                fontSize: "16px",
                            },
                            "& .MuiListItemText-secondary": {
                                fontSize: "12px",
                            },
                        }}
                    >
                        {currentEvents
                            .sort(
                                (a, b) => new Date(a.start) - new Date(b.start)
                            )
                            .map((event, i) => (
                                <ListItem
                                    key={i}
                                    sx={{
                                        background: colors.greenAccent[800],
                                        mb: "3px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <ListItemText
                                        primary={event.title}
                                        secondary={formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                        sx={{ overflowWrap: "break-word" }}
                                    />
                                </ListItem>
                            ))}
                    </List>
                </Box>
                <Box
                    flex="1 1 100%"
                    sx={{
                        "& .fc-list-day-cushion.fc-cell-shaded": {
                            backgroundColor: colors.primary[500],
                        },
                    }}
                >
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right:
                                "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        eventsSet={(events) => setCurrentEvents(events)}
                        eventClick={(info) => {
                            if (
                                window.confirm(
                                    `Are you sure you want to delete the event '${info.event.title}'`
                                )
                            ) {
                                info.event.remove()
                            }
                        }}
                        select={(info) => {
                            console.log(info)
                            const title = prompt("Event Title:")
                            if (title) {
                                info.view.calendar.addEvent({
                                    title: title,
                                    start: info.startStr,
                                    end: info.endStr,
                                })
                            }
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar
