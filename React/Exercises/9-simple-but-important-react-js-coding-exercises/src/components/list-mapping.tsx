const animals = [
  { id: crypto.randomUUID(), name: "Lion", emoji: "🦁" },
  { id: crypto.randomUUID(), name: "Tiger", emoji: "🐯" },
  { id: crypto.randomUUID(), name: "Elephant", emoji: "🐘" },
  { id: crypto.randomUUID(), name: "Giraffe", emoji: "🦒" },
  { id: crypto.randomUUID(), name: "Penguin", emoji: "🐧" },
  { id: crypto.randomUUID(), name: "Kangaroo", emoji: "🦘" },
  { id: crypto.randomUUID(), name: "Panda", emoji: "🐼" },
  { id: crypto.randomUUID(), name: "Wolf", emoji: "🐺" },
];

export default function ListMapping() {
  return (
    <div className="p-10 bg-green-400/20 border-green-300 border-2 rounded-4xl">
      <div className="grid grid-cols-8 gap-4">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} name={animal.name} emoji={animal.emoji} />
        ))}
      </div>
    </div>
  );
}

const AnimalCard = ({ name, emoji }: { name: string; emoji: string }) => {
  return (
    <div className="bg-slate-400/30 rounded-4xl p-4 flex justify-center items-center flex-col">
      <p className="text-xl pb-2">{emoji}</p>
      <p className="text-lg">{name}</p>
    </div>
  );
};
