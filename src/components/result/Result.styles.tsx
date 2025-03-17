import styled from "styled-components";

export const StyledResultContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  height: 12.8rem;
  background-color: ${({ theme }) => theme.colors.resultContainer};
  color: ${({ theme }) => theme.colors.result};
  font-size: 5.6rem;
  letter-spacing: -0.093rem;
  display: flex;
  align-items: center;
  justify-content: right;
  border-radius: 1rem;
  padding-right: 3.2rem;
  @media (max-width: 620px) {
    max-width: 32.7rem;
    height: 8.8rem;
    font-size: 4rem;
    letter-spacing: -0.067rem;
    padding-right: 2.4rem;
  }
`;
