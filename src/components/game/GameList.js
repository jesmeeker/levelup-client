import React, { useEffect, useState } from "react"
import { getGames } from "../../managers/GameManagers"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.name}</div>
                        <div className="game__players">{game.min_player} players needed</div>
                        <div className="game__skillLevel">Game Type: {game.game_type.label}</div>
                    </section>
                })
            }
        </article>
    )
}