import React, { useContext } from "react";
import PomodoroTimer from "./components/PomodoroTimer";
import TimerContext from "./contexts/TimerContext";
import ModalSettings from "./components/ModalSettings";
import { getLocalStorage } from "./services/Storage";

function App() {
  const { timePomodoro, timeResting, cycles } = getLocalStorage();

  return (
    <div>
      <TimerContext>
        <ModalSettings />
        <PomodoroTimer
          defaultPomodoroTimer={timePomodoro}
          shortRestTime={timeResting}
          longRestTime={timeResting * 4}
          cycles={cycles}
        />
      </TimerContext>
    </div>
  );
}

export default App;
