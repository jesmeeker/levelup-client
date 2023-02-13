import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getGames } from "../../managers/GameManager.js"
import "./game.css"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 icon-create"
                onClick={() => {
                    navigate({ pathname: "new" })
                }}
            >Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.name}</div>
                        <div className="game__players">{game.min_player} players needed</div>
                        <div className="game__skillLevel">Game Type: {game.game_type.label}</div>
                        <div className="game__footer">
                            <button
                                onClick={() => {
                                    navigate({ pathname: `edit/${game.id}`})
                                }}>Edit</button>
                        </div>
                    </section>
                })
            }
        </article>
    )
}