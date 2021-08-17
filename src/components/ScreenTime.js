import React, { useState,useEffect } from 'react'

export default function ScreenTime() {

    const [secs, setsecs] = useState(60)
    const [mins, setmins] = useState(60)

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
            <h3>Your screen time is: </h3>
            <span id="screen-time">{mins+" : "+secs}</span>
            <br /><br />
            <button>Start</button>
        </div>
    )
}
