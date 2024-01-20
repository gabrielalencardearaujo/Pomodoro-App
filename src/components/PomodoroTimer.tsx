import React, { LegacyRef, MutableRefObject, useContext } from "react";
import { useInterval } from "../hooks/useInterval";
import Button from "./Button";
import { useTimerActive } from "../contexts/TimerContext";
import Stats from "./Stats";
import Timer from "./Timer";
import bellStart from '../sounds/bellStart.mp3';
import bellStop from '../sounds/bellFinish.mp3';

const soundStart = new Audio(bellStart); 
const soundStop = new Audio(bellStop); 

interface Props {
  defaultPomodoroTimer: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

function PomodoroTimer(props: Props) {
  const { activeModal, setActiveModal } = useTimerActive();
  const [active, setActive] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);
  const [pomodoros, setPomodoros] = React.useState(0);
  const [cycles, setCycles] = React.useState(0);
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  React.useEffect(() => {
    if (working) document.body.classList.add("working");
    else document.body.classList.remove("working");
  }, [working]);

  React.useEffect(() => {
    // Completando 1 ciclo:
    if (mainTime === -1 && working && pomodoros === props.cycles - 1) {
      setWorking(false);
      setResting(true);
      setMainTime(props.longRestTime);
      setPomodoros(0);
      setCycles(cycles + 1);
      soundStop.play();
    }

    //Completando 1 pomodoro
    if (mainTime === -1 && working && pomodoros !== props.cycles - 1) {
      setWorking(false);
      setResting(true);
      setMainTime(props.shortRestTime);
      setPomodoros(pomodoros + 1);
      soundStop.play();
    }

    if (mainTime === -1 && !working) {
      setWorking(true);
      setResting(false);
      setMainTime(props.defaultPomodoroTimer);
      soundStart.play();
    }
  }, [mainTime]);

  const configureWorking = () => {
    setActive(!active);
    if(!working && !resting) soundStart.play();

    if (!resting) setWorking(true)
    else setWorking(false);
  };

  const reset = () => {
    setMainTime(props.defaultPomodoroTimer);
    setWorking(false);
    setResting(false);
    setActive(false);
    setPomodoros(0);
    setCycles(0);
  };

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    active ? 1000 : null
  );

  return (
    <section className="container mt-4 p-2">
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">
            {working ? "Trabalhando" : resting ? "Descançando" : "Pomodoro App"}
          </h2>
        </div>

        <div className="card-body ">
          <Timer mainTimer={mainTime} className={'font-weight-bold timer text-center'} />

          <div className="buttons">
            <Button
              onclick={() => configureWorking()}
              text={active ? "Pausar" : "Play"}
              className={"btn btn-primary px-4"}
            />
            <Button
              onclick={() => reset()}
              text="Parar"
              className="btn btn-danger px-4"
            />
          </div>
        </div>
        <Stats 
          countPomodoros={pomodoros} 
          countCycles={cycles} 
          className={'p-4'}
        />

        <Button
          text="Alterar"
          onclick={() => setActiveModal(!activeModal)}
          className="btn btn-primary"
        />

      </div>
    </section>
  );
}

export default PomodoroTimer;
