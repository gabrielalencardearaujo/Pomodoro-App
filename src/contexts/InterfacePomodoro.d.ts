interface TimerActiveInterface<T> {
  activeModal: T;
  setActiveModal: React.Dispatch<React.SetStateAction<T>>;
}
