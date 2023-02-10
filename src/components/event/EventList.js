import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getEvents } from "../../managers/EventManager"
import { HumanDate } from "../utils/HumanDate"
import { HumanTime } from "../utils/HumanTime"
import "./events.css"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            <button className="btn btn-2 icon-create"
                onClick={() => {
                    navigate({ pathname: "new" })
                }}
            >Register New Event</button>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">

                        <div className="event__game">WHAT: {event.game.name}</div>
                        <div className="event__date">WHEN: <HumanDate date={event.date_of_event}/> at <HumanTime time={event.start_time}/></div>
                        <div className="event__location">WHERE: {event.location}</div>
                        <div className="event__host">Event Host: {event.host.full_name}</div>
                    </section>
                })
            }
        </article>
    )
}