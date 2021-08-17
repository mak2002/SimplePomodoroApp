import React from 'react'

export default function StartPomodoro({ setstarted, started }) {

    const handleClick = () => {
        setstarted(!started)
    }

    return (
        <div>
            <h2>Start Pomodoro</h2>
            <button onClick={handleClick}>Start Pomodoro</button>
        </div>
    )
}
