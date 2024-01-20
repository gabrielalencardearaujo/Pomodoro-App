interface ArrayPomodoto {
  timePomodoro: number;
  timeResting: number;
  cycles: number
}

export const getLocalStorage = (): ArrayPomodoto => {
  const getStorage = localStorage.getItem('pomodoroApp'); 

  if(getStorage !== null) return JSON.parse(getStorage);
  else {
    setLocalStorage({
      timePomodoro: 1500,
      timeResting: 300,
      cycles: 4
    })
    return getLocalStorage();
  };
}

export const setLocalStorage = (date: ArrayPomodoto) => {
  localStorage.setItem('pomodoroApp', JSON.stringify(date))
}
