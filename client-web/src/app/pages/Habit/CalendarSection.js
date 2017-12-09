import React from "react"
import BigCalendar from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import styled from "styled-components"

const getEvents = timestamps => timestamps.map(timestamp => ({
  title: "HIT",
  allDay: true,
  start: timestamp,
  end: timestamp,
}))

BigCalendar.momentLocalizer(moment)

const CalendarWrapper = styled.div`
  height: 800px;
`

const CalendarSection = ({ timestamps }) => (
  <CalendarWrapper>
    <BigCalendar
      events={getEvents(timestamps)}
      views={["month"]}
    />
  </CalendarWrapper>
)

export default CalendarSection
