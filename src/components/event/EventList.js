import React, { useEffect, useState } from "react"
import { getEvents } from "../../managers/EventManager"
import "./events.css"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">

                        <div className="event__game">WHAT: {event.game.name}</div>
                        <div className="event__date">WHEN: {event.date_of_event}</div>
                        <div className="event__location">WHERE: {event.location}</div>
                        <div className="event__host">Event Host: {event.host.full_name}</div>
                    </section>
                })
            }
        </article>
    )
}