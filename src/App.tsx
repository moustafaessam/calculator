import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Global Styling/theme";
import { GlobalStyling } from "./Global Styling/global";
import Header from "./components/header/Header";
import Result from "./components/result/Result";
import ButtonsContainer from "./components/buttonsContainerFolder/ButtonsContainer";
export default function App() {
  const [theme, setTheme] = useState(darkTheme);
  const [result, setResult] = useState<string | string[]>([]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyling />
      <Header setTheme={setTheme} />
      <Result result={result} setResult={setResult} />
      <ButtonsContainer result={result} setResult={setResult} />
    </ThemeProvider>
  );
}
