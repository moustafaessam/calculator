import {
  StyledButton,
  StyledButtonsMainContainer,
} from "./buttonsContainer.styles";
import { buttons } from "./buttonsData";
import { handleResult } from "./utils";

type ButtonsContainerProps = {
  result: string[] | string;
  setResult: React.Dispatch<React.SetStateAction<string | string[]>>;
};

export default function ButtonsContainer({
  result,
  setResult,
}: ButtonsContainerProps) {
  return (
    <StyledButtonsMainContainer>
      {buttons.map((element) => (
        <StyledButton
          key={element.name}
          style={{ gridArea: element.name }}
          ButtonName={element.name}
          onClick={() =>
            handleResult(element.function, element.symbol, setResult, result)
          }
        >
          {element.symbol}
        </StyledButton>
      ))}
    </StyledButtonsMainContainer>
  );
}
