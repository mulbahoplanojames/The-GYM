import Display from "./components/Display";
import ButtonGrid from "./components/ButtonGrid";
import { useCalculator } from "./hooks/useCalculator";

export default function Calculator() {
  const {
    displayValue,
    inputNumber,
    inputDecimal,
    clear,
    toggleSign,
    percentage,
    performOperation,
    performEqual,
  } = useCalculator();

  return (
    <div className="h-screen bg-slate-800 flex items-center justify-center overflow-hidden">
      <div className="bg-green-600/20 border-2 border-green-600/40 p-4 shadow-2xl w-full max-w-sm h-full md:h-auto md:max-h-screen flex flex-col overflow-hidden">
        <Display value={displayValue} />
        <ButtonGrid
          onNumberClick={inputNumber}
          onOperationClick={performOperation}
          onDecimalClick={inputDecimal}
          onEqualClick={performEqual}
          onClearClick={clear}
          onToggleSignClick={toggleSign}
          onPercentageClick={percentage}
        />
      </div>
    </div>
  );
}
