export default function Header() {
  return (
    <div className="border-b-2 border-slate-400 text-white px-6 py-4 flex items-center justify-between bg-slate-800 ">
      <div className="w-12 h-12 border overflow-hidden">
        <img
          src="/tom_jerry_logo.jpg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      <menu className="inline-flex gap-12">
        <a href="#">Tom and Jerry</a>
        <a href="#">The family Guy</a>
        <a href="#">Puzz in Boots</a>
        <a href="#">The Adventure</a>
        <a href="#">The lion King</a>
      </menu>
    </div>
  );
}
