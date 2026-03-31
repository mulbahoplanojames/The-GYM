import { useEffect, useRef, useState } from "react";

export default function TooltipWithEffect() {
  const boxRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);
  const [tooltipX, setTooltipX] = useState(0);

  useEffect(() => {
    if (show && boxRef.current && tooltipRef.current) {
      const boxRect = boxRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const x = boxRect.left + boxRect.width / 2 - tooltipRect.width / 2;

      setTooltipX(x);
    }
  }, [show]);

  return (
    <div
      style={{
        position: "relative",
        height: "200px",
        padding: "50px",
      }}
    >
      <div
        ref={boxRef}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{
          width: "200px",
          padding: "20px",
          background: "lightblue",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Hover me
      </div>

      {show && (
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            top: "0px",
            left: tooltipX,
            background: "black",
            color: "white",
            padding: "5px",
            borderRadius: "4px",
          }}
        >
          Tooltip
        </div>
      )}
    </div>
  );
}
