import { memo } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";

const getTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return darkTheme;
  } else {
    return lightTheme;
  }
};

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <Title>Welcome</Title>
      <p>Use this as a starting point to develop your own application :-)</p>
    </>
  );
}

export default memo(App);
