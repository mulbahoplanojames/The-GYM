import React from "react";
import Button from "./Button";

interface ButtonGridProps {
  onNumberClick: (num: string) => void;
  onOperationClick: (op: "+" | "-" | "x" | "÷") => void;
  onDecimalClick: () => void;
  onEqualClick: () => void;
  onClearClick: () => void;
  onToggleSignClick: () => void;
  onPercentageClick: () => void;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({
  onNumberClick,
  onOperationClick,
  onDecimalClick,
  onEqualClick,
  onClearClick,
  onToggleSignClick,
  onPercentageClick,
}) => (
  <div className="grid grid-cols-4 gap-2 md:gap-3 flex-1 min-h-0">
    {/* Row 1 */}
    <Button
      onClick={onClearClick}
      className="bg-gray-600 hover:bg-gray-500 text-white py-4"
    >
      AC
    </Button>
    <Button
      onClick={onToggleSignClick}
      className="bg-gray-600 hover:bg-gray-500 text-white py-4"
    >
      +/-
    </Button>
    <Button
      onClick={onPercentageClick}
      className="bg-gray-600 hover:bg-gray-500 text-white py-4"
    >
      %
    </Button>
    <Button
      onClick={() => onOperationClick("÷")}
      className="bg-orange-500 hover:bg-orange-400 text-white py-4"
    >
      ÷
    </Button>

    {/* Row 2 */}
    <Button
      onClick={() => onNumberClick("7")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      7
    </Button>
    <Button
      onClick={() => onNumberClick("8")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      8
    </Button>
    <Button
      onClick={() => onNumberClick("9")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      9
    </Button>
    <Button
      onClick={() => onOperationClick("x")}
      className="bg-orange-500 hover:bg-orange-400 text-white py-4"
    >
      x
    </Button>

    {/* Row 3 */}
    <Button
      onClick={() => onNumberClick("4")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      4
    </Button>
    <Button
      onClick={() => onNumberClick("5")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      5
    </Button>
    <Button
      onClick={() => onNumberClick("6")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      6
    </Button>
    <Button
      onClick={() => onOperationClick("-")}
      className="bg-orange-500 hover:bg-orange-400 text-white py-4"
    >
      -
    </Button>

    {/* Row 4 */}
    <Button
      onClick={() => onNumberClick("1")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      1
    </Button>
    <Button
      onClick={() => onNumberClick("2")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      2
    </Button>
    <Button
      onClick={() => onNumberClick("3")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      3
    </Button>
    <Button
      onClick={() => onOperationClick("+")}
      className="bg-orange-500 hover:bg-orange-400 text-white py-4"
    >
      +
    </Button>

    {/* Row 5 */}
    <Button
      onClick={() => onNumberClick("0")}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4 col-span-2"
    >
      0
    </Button>
    <Button
      onClick={onDecimalClick}
      className="bg-gray-700 hover:bg-gray-600 text-white py-4"
    >
      .
    </Button>
    <Button
      onClick={onEqualClick}
      className="bg-orange-500 hover:bg-orange-400 text-white py-4"
    >
      =
    </Button>
  </div>
);

export default ButtonGrid;
