import React from 'react'

const games = ["cricket", "football", "hockey"]
const days = ["weekday", "weekend"]

const RadioQue = () => {
    return (
        <>
            <div className="container mx-auto mt-5">
                <div className="card">
                    <div className="card-header">Which Game! You will play?</div>
                    <div className="card-body">
                        {games.length > 0 &&
                            games.map((game, index) => {
                                return (
                                    <div key={index}>
                                        <input className='mx-3'
                                            type="radio"
                                            value={game}
                                            name="game"
                                            id={game}
                                            onClick={(e) => console.log(e.target.value)}
                                        />
                                        <label htmlFor={game}>{game}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default RadioQue