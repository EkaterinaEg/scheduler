import { set } from "immutable";
import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // This line is new!

  const transition = (transitionMode, replace = false) => {
    setHistory((prev) => [...prev, transitionMode]);
  };

  const back = () => {
    setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    // setMode(history[history.length - 1]);
  };

  return { mode: history[history.length - 1], transition, back };
};
export default useVisualMode;
