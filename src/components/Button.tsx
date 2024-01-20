import React from "react";
import { useTimerActive } from "../contexts/TimerContext";

interface Props {
  text: string;
  onclick:() => void;
  className?: string;
}

function Button(props: Props) {

  return (
    <>
      <button 
        onClick={props.onclick} 
        className={props.className}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
