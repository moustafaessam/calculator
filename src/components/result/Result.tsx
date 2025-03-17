import { StyledResultContainer } from "./Result.styles";

type ResultProps = {
  result: string[] | string;
  setResult: React.Dispatch<React.SetStateAction<string | string[]>>;
};

export default function Result({ result }: ResultProps) {
  return (
    <StyledResultContainer>
      <p>{Array.isArray(result) ? result.join(" ") : result}</p>
    </StyledResultContainer>
  );
}
