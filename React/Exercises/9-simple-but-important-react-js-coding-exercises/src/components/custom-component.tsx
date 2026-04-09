const numbers = [
  { id: crypto.randomUUID(), label: 1, color: "bg-green-500" },
  { id: crypto.randomUUID(), label: 2, color: "bg-blue-500" },
  { id: crypto.randomUUID(), label: 3, color: "bg-yellow-500" },
];

export default function CustomComponent() {
  return (
    <div className="p-10 bg-purple-400/20 border-purple-300 border-2 rounded-4xl">
      {numbers.map((num) => (
        <Button count={num.label} color={num.color} key={num.id} />
      ))}
    </div>
  );
}

const Button = ({ count, color }: { count: number; color: string }) => {
  return (
    <button
      onClick={() => alert(`Button ${count}`)}
      className={`${color} font-bold text-white py-2 px-5 cursor-pointer mx-4 rounded-4xl`}
    >
      Button {count}
    </button>
  );
};
