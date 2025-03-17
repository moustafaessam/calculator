export function handleResult(
  func: string,
  value: string,
  setResult: React.Dispatch<React.SetStateAction<string | string[]>>,
  result: string[] | string
) {
  if (
    typeof result === "string" ||
    (Array.isArray(result) && result.includes("Infinity"))
  ) {
    return setResult([]); // handle infinity and errors
  }

  if (result.length === 0) {
    if (func === "number" || value === "-") {
      return setResult([value]); // allow negative numbers at the start
    }
    return setResult([]);
  }

  if (func === "reset") {
    return setResult([]);
  }

  if (func === "delete") {
    return setResult((prev) => {
      const lastElement = prev[prev.length - 1];

      if (lastElement) {
        const trimmed = lastElement.slice(0, -1);
        return trimmed ? [...prev.slice(0, -1), trimmed] : prev.slice(0, -1);
      }
      return prev.slice(0, -1);
    });
  }

  if (func === "number") {
    return setResult((prev) => {
      const lastElement = prev[prev.length - 1];

      if (
        !isNaN(Number(lastElement)) ||
        lastElement === "-" ||
        lastElement === "."
      ) {
        // Ensure only one decimal per number
        if (value === "." && lastElement.includes(".")) return prev;
        return [...prev.slice(0, -1), lastElement + value];
      } else {
        return [...prev, value];
      }
    });
  }

  if (func === "symbol") {
    return setResult((prev) => {
      const lastElement = prev[prev.length - 1];
      const isLastElementSymbol = ["+", "-", "*", "/"].includes(lastElement);

      if (value === "-" && isLastElementSymbol) {
        console.log("hello");
        return [...prev, value]; // Allow negative numbers after an operator
      }

      if (isLastElementSymbol) {
        return prev; // Prevent multiple symbols in a row
      }

      return [...prev, value];
    });
  }

  if (func === "equal") {
    try {
      return setResult(
        Array.isArray(result)
          ? [parseFloat(eval(result.join(" ")).toFixed(2)).toString()]
          : "Error"
      );
    } catch {
      return setResult("Error");
    }
  }

  return setResult((prev) => [...prev, value]);
}
