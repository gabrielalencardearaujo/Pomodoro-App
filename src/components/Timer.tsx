import React from "react";
import { secondToTime } from "../utils/secondToTime";


type Props = React.ComponentProps<'div'> & {
  mainTimer: number;
}

function Timer({mainTimer, ...props}: Props) {
  return <div {...props}>
    { secondToTime(mainTimer)}
    </div>;
}

export default Timer;
