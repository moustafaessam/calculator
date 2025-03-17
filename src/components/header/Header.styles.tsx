import styled from "styled-components";

type themeProps = {
  buttonAvaliable: string;
};

export const StyledMainHeaderContainer = styled.div`
  align-items: center;
  margin-bottom: 3.2rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.headerFont};
  max-width: 53.3rem;
  height: 4.2rem;
  width: 100%;
  @media (max-width: 620px) {
    max-width: 32rem;
  }
`;

export const StyledHeaderText = styled.p`
  font-size: 3.2rem;
  letter-spacing: -0.053rem;
`;

export const StyledThemeChangeContainer = styled.div`
  display: flex;
  gap: 2.6rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  align-items: center;
`;

export const StyledThemeToggleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: 7.1rem;
  height: 4.2rem;
`;

export const StyledToggleNumbersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.headerButtonBackground};
  flex-grow: 1;
  border-radius: 1.3rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledButton = styled.div<themeProps>`
  border-radius: 50%;
  background-color: ${({ theme, buttonAvaliable }) =>
    buttonAvaliable === "true" ? theme.colors.headerCircle : "transparent"};
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;
