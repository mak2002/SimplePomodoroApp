import './App.css';
import ScreenTime from './components/ScreenTime';
import StartPomodoro from './components/StartPomodoro';
import React, { useState } from 'react'

function App() {

  const [started, setstarted] = useState(false)

  return (
    <div className="App">
      {started ? <ScreenTime started={started} setstarted={setstarted}/> : <StartPomodoro started={started} setstarted={setstarted}/>}
    </div>
  );
}

export default App;
