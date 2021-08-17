import React from 'react'

export default function StartPomodoro({ setstarted, started }) {

    const handleClick = () => {
        setstarted(!started)
    }

    return (
        <div>
            <p>Start Pomodoro</p>
            <button onClick={handleClick}>Start Pomodoro</button>
        </div>
    )
}
