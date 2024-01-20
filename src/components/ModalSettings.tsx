import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useTimerActive } from "../contexts/TimerContext";
import { getLocalStorage, setLocalStorage } from "../services/Storage";

function ModalSettings() {
  const {timePomodoro, timeResting, cycles} = getLocalStorage();
  const [newTimePomodoro, setNewTimePomodoro] = React.useState(timePomodoro);
  const [newTimeResting, setNewTimeResting] = React.useState(timeResting);
  const [newCycles, setNewCycles] = React.useState(cycles);
  const {activeModal, setActiveModal} = useTimerActive();


  const handleSave = () => {
    setLocalStorage({
      timePomodoro: newTimePomodoro, 
      timeResting: newTimeResting,
      cycles: newCycles})
    
    location.reload();
  };


  return (
    <div
      className={`container modal border border-primary rounded ${
        activeModal ? "modalActive" : ""
      }`}
    >
      <Input
        type="number"
        onChange={({ target }) => setNewTimePomodoro(Number(target.value))}
        className="d-flex"
        value={newTimePomodoro}
      >
        Tempo do Pomodoro(em segundos):
      </Input>
      <Input
        type="number"
        onChange={({ target }) => setNewTimeResting(Number(target.value))}
        value={newTimeResting}
      >
        Tempo do Descanço(em segundos):
      </Input>
      <Input
        type="number"
        onChange={({ target }) => setNewCycles(Number(target.value))}
        value={newCycles}
      >
        Quantidade de ciclos:
      </Input>

      <Button onclick={handleSave} text="Salvar" className="btn btn-primary" />
    </div>
  );
}

export default ModalSettings;
