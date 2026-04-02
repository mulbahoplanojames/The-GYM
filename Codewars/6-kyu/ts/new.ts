export function solve(
  a: number,
  b: number,
  c: number,
  alpha: number,
  beta: number,
  gamma: number,
): number[] {
  const pi = 3.14159265358979323846;

  // Convert to radians
  const A = (alpha * pi) / 180;
  const B = (beta * pi) / 180;
  const C = (gamma * pi) / 180;

  // Compute total X and Y
  const x = a * Math.cos(A) + b * Math.cos(B) + c * Math.cos(C);

  const y = a * Math.sin(A) + b * Math.sin(B) + c * Math.sin(C);

  // Distance CO
  const distance = Math.sqrt(x * x + y * y);
  const roundedDistance = Math.round(distance);

  // Angle tOC
  let angle = (Math.atan2(y, x) * 180) / pi;

  if (angle < 0) {
    angle += 360;
  }

  // Convert to degrees, minutes, seconds
  const degrees = Math.floor(angle);

  const minutesFloat = (angle - degrees) * 60;
  const minutes = Math.floor(minutesFloat);

  const secondsFloat = (minutesFloat - minutes) * 60;
  const seconds = Math.floor(secondsFloat);

  return [roundedDistance, degrees, minutes, seconds];
}

console.log(solve(12, 20, 18, 45, 30, 60));
