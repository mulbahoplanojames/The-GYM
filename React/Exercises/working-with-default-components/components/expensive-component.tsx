export default function ExpensiveComponent({ num }: { num: number }) {
  let total = 0;

  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }

  return <div>{total}</div>;
}
