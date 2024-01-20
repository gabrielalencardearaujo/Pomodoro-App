import React from "react";

const TimerActive = React.createContext<TimerActiveInterface<boolean> | null>(null);

export const useTimerActive = () => {
  const context = React.useContext(TimerActive);

  if (context === null)
    throw new Error("O contexto deve ser usado dentro do Provider.");
  return context;
};


function TimerContext({ children }: React.PropsWithChildren) {
  const [activeModal, setActiveModal] = React.useState(false);

  return (
    <TimerActive.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </TimerActive.Provider>
  );
}

export default TimerContext;
