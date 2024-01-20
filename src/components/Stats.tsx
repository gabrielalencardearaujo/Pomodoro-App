import React from 'react'

type Props = React.ComponentProps<'div'> & {
  countPomodoros: number | undefined;
  countCycles: number;
}


function Stats({countPomodoros, countCycles, ...props}: Props) {


  return (
    <div {...props}>
      <p>Pomodoros: {countPomodoros}</p>
      <p>Ciclos: {countCycles}</p>
    </div>
  )
}

export default Stats