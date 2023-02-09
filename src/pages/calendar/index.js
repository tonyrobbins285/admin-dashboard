import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

function Calendar() {
    let draggableEl = document.getElementById('mydraggable')
	return (
		<Box m="10px 20px">
			<Header title="Calendar" subtitle="Full Calendar Interactive Page" />
			<Box>
				<Box>{new Draggable(draggableEl)}</Box>
				<Box>
					<FullCalendar
						headerToolbar={{
							left: "prev,next today",
							center: "title",
							right: "dayGridMonth,timeGridWeek,timeGridDay",
						}}
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        droppable= {true}
						initialView="dayGridMonth"
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default Calendar;
