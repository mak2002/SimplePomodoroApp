import React, { useState,useEffect } from 'react'

export default function ScreenTime({ setstarted, started }) {

    const [secs, setsecs] = useState(59)
    const [mins, setmins] = useState(25)


    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)
            if(secs === 0) {
                if(mins !== 0) {
                    setsecs(60)
                    setmins(mins-1)
                }
                else{

                }

            }
            else{
                setsecs(secs-1)
            }
        },1000)
    },[secs])

    const timerMins = mins < 10 ? `0${mins}` : mins
    const timersecs = secs < 10 ? `0${secs}` : secs


    return (
        <div>
            <p>Pomodoro: </p>
            <span id="screen-time">{mins+" : "+secs}</span>
            <br /><br />
            <button onClick={() =>{
                setstarted(!started)
            }}>Stop Pomodoro</button>
        </div>
    )
}
