import { useEffect, useState } from "react";
import {
  darkTheme,
  gamingTheme,
  lightTheme,
  ThemeType,
} from "../../Global Styling/theme";
import {
  StyledButton,
  StyledButtonContainer,
  StyledHeaderText,
  StyledMainHeaderContainer,
  StyledThemeChangeContainer,
  StyledThemeToggleContainer,
  StyledToggleNumbersContainer,
} from "./Header.styles";

type HeaderProps = {
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export default function Header({ setTheme }: HeaderProps) {
  const [themeNum, setThemeNum] = useState(1);
  useEffect(() => {
    if (themeNum === 1) setTheme(darkTheme);
    if (themeNum === 2) setTheme(lightTheme);
    if (themeNum === 3) setTheme(gamingTheme);
  }, [themeNum, setTheme]);

  // Cycle through themes
  function HandleThemeNum() {
    setThemeNum((prev) => (prev === 3 ? 1 : prev + 1));
  }

  return (
    <StyledMainHeaderContainer>
      <StyledHeaderText>calc</StyledHeaderText>
      <StyledThemeChangeContainer>
        <p>Theme</p>
        <StyledThemeToggleContainer>
          <StyledToggleNumbersContainer>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </StyledToggleNumbersContainer>
          <StyledButtonContainer>
            <StyledButton
              onClick={HandleThemeNum}
              style={{
                pointerEvents: themeNum === 1 ? "all" : "none",
              }}
              buttonAvaliable={themeNum === 1 ? "true" : "false"}
            />
            <StyledButton
              onClick={HandleThemeNum}
              style={{
                pointerEvents: themeNum === 2 ? "all" : "none",
              }}
              buttonAvaliable={themeNum === 2 ? "true" : "false"}
            />
            <StyledButton
              onClick={HandleThemeNum}
              style={{
                pointerEvents: themeNum === 3 ? "all" : "none",
              }}
              buttonAvaliable={themeNum === 3 ? "true" : "false"}
            />
          </StyledButtonContainer>
        </StyledThemeToggleContainer>
      </StyledThemeChangeContainer>
    </StyledMainHeaderContainer>
  );
}
