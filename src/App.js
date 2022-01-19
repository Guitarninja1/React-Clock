import { useState } from "react";
import "./App.css";

function App() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hour, setHour] = useState(0);
  const [secHand, setSecHand] = useState(0);
  const [minHand, setMinHand] = useState(0);
  const [hourHand, setHourHand] = useState(0);

  setInterval(() => {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();
    setMinHand((minutes / 60) * 360 + 90);
    setSecHand((seconds / 60) * 360 + 90);
    setHourHand((hours / 12) * 360 + 90);
    if (seconds < 10) {
      setSec("0" + seconds);
    } else {
      setSec(seconds);
    }
    if (hours < 10) {
      setHour("0" + hours);
    }
    if (hours > 12) {
      setHour(hours - 12);
    }
    if (minutes < 10) {
      setMin("0" + minutes);
    } else {
      setMin(minutes);
    }
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <div className="clock">
          <div className="clock-face">
            <div className="time hour">{hour}</div>
            <div className="time minute">{min}</div>
            <div className="time second">{sec}</div>
          </div>
        </div>
        <div className="circle-clock">
          <div className="clock-hand hour">
            <div
              className="clock-face-container"
              style={{ transform: `rotate(${secHand}deg)` }}
            >
              <div className="center-dot"></div>
              <div className="border"></div>
            </div>
            <div
              className="clock-face-container2"
              style={{ transform: `rotate(${minHand}deg)` }}
            >
              <div className="center-dot2"></div>
              <div className="border2"></div>
            </div>
            <div
              className="clock-face-container3"
              style={{ transform: `rotate(${hourHand}deg)` }}
            >
              <div className="center-dot3"></div>
              <div className="border3"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
