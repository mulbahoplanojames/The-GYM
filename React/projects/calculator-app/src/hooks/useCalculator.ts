import { useState } from "react";

type Operation = "+" | "-" | "x" | "÷" | null;

interface CalculatorState {
  displayValue: string;
  previousValue: number | null;
  operation: Operation;
  waitingForNewValue: boolean;
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    displayValue: "0",
    previousValue: null,
    operation: null,
    waitingForNewValue: false,
  });

  const inputNumber = (num: string) => {
    setState((prevState) => {
      if (prevState.waitingForNewValue) {
        return {
          ...prevState,
          displayValue: num,
          waitingForNewValue: false,
        };
      }

      return {
        ...prevState,
        displayValue:
          prevState.displayValue === "0" ? num : prevState.displayValue + num,
      };
    });
  };

  const inputDecimal = () => {
    setState((prevState) => {
      if (prevState.waitingForNewValue) {
        return {
          ...prevState,
          displayValue: "0.",
          waitingForNewValue: false,
        };
      }

      if (prevState.displayValue.includes(".")) {
        return prevState;
      }

      return {
        ...prevState,
        displayValue: prevState.displayValue + ".",
      };
    });
  };

  const clear = () => {
    setState({
      displayValue: "0",
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
    });
  };

  const toggleSign = () => {
    setState((prevState) => ({
      ...prevState,
      displayValue: (parseFloat(prevState.displayValue) * -1).toString(),
    }));
  };

  const percentage = () => {
    setState((prevState) => ({
      ...prevState,
      displayValue: (parseFloat(prevState.displayValue) / 100).toString(),
    }));
  };

  const performOperation = (nextOperation: Operation) => {
    setState((prevState) => {
      const inputValue = parseFloat(prevState.displayValue);

      if (prevState.previousValue === null) {
        return {
          ...prevState,
          previousValue: inputValue,
          operation: nextOperation,
          waitingForNewValue: true,
        };
      }

      if (prevState.operation && !prevState.waitingForNewValue) {
        const currentValue = prevState.previousValue || 0;
        const newValue = calculate(
          currentValue,
          inputValue,
          prevState.operation,
        );

        return {
          displayValue: newValue.toString(),
          previousValue: newValue,
          operation: nextOperation,
          waitingForNewValue: true,
        };
      }

      return {
        ...prevState,
        operation: nextOperation,
        waitingForNewValue: true,
      };
    });
  };

  const performEqual = () => {
    setState((prevState) => {
      if (prevState.previousValue === null || prevState.operation === null) {
        return prevState;
      }

      const inputValue = parseFloat(prevState.displayValue);
      const currentValue = prevState.previousValue;
      const newValue = calculate(currentValue, inputValue, prevState.operation);

      return {
        displayValue: newValue.toString(),
        previousValue: null,
        operation: null,
        waitingForNewValue: true,
      };
    });
  };

  const calculate = (
    firstValue: number,
    secondValue: number,
    operation: Operation,
  ): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "x":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  return {
    displayValue: state.displayValue,
    inputNumber,
    inputDecimal,
    clear,
    toggleSign,
    percentage,
    performOperation,
    performEqual,
  };
};
