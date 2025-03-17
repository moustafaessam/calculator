import styled from "styled-components";

export const StyledButtonsMainContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  height: 48rem;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors.buttonContainerBackground};
  border-radius: 1rem;
  margin-top: 2.4rem;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "seven eight nine del"
    "four five six plus"
    "one two three minus"
    "dot zero divide multiply"
    "reset reset equal equal";

  @media (max-width: 620px) {
    padding: 2.4rem;
    max-width: 32.7rem;
    gap: 1.4rem;
    height: 42rem;
  }
`;

type StyledButtonProps = {
  ButtonName: string;
};

export const StyledButton = styled.div<StyledButtonProps>`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-size: ${({ ButtonName }) => {
    if (
      ButtonName === "del" ||
      ButtonName === "reset" ||
      ButtonName === "equal"
    ) {
      return "2.8rem";
    }
    return "4rem";
  }};
  color: ${({ theme, ButtonName }) => {
    if (ButtonName === "del" || ButtonName === "reset") {
      return theme.colors.secondaryButtonFont;
    } else if (ButtonName === "equal") {
      return theme.colors.secondaryButtonFont;
    }
    return theme.colors.primaryButtonFont;
  }};
  background-color: ${({ theme, ButtonName }) => {
    if (ButtonName === "del") {
      return theme.colors.delBackground;
    } else if (ButtonName === "reset") {
      return theme.colors.resetBackground;
    } else if (ButtonName === "equal") {
      return theme.colors.equalBackground;
    }
    return theme.colors.mainButtonBackground;
  }};
  @media (max-width: 620px) {
    font-size: ${({ ButtonName }) => {
      if (
        ButtonName === "del" ||
        ButtonName === "reset" ||
        ButtonName === "equal"
      ) {
        return "2rem";
      }
      return "3.2rem";
    }};
  }
`;
