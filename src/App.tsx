import { createContext, useState } from "react";
import GlobalStyles from "./globalStyles";
import { Body } from "./Body";
import { Header } from "./Header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import type { TimerModel } from "./timer.model";

const timerInitialValue = {
  timeLeft: 5,
  isStarted: false,
};
export const TimerContext = createContext<TimerModel>(timerInitialValue);

const getTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return darkTheme;
  } else {
    return lightTheme;
  }
};

function App(): JSX.Element {
  const [timer, setTimer] = useState<TimerModel>(timerInitialValue);

  const startTimer = () => {
    let timeLeft = timerInitialValue.timeLeft;
    setTimer({
      isStarted: true,
      timeLeft: timerInitialValue.timeLeft,
    });
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        setTimer(prev => ({ ...prev, timeLeft }));
      } else {
        clearInterval(interval);
        setTimer(prev => ({ ...prev, isStarted: false }));
      }
    }, 1000);
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <TimerContext.Provider value={timer}>
        <Header visible={false} />
        <Body onBtnClick={startTimer} />
      </TimerContext.Provider>
    </ThemeProvider>
  );
}

export default App;
