import { navLinks } from "../data/layout";

export default function Footer() {
  return (
    <div className="bg-amber-600/20 border-t-2 border-amber-600 text-white py-3 px-10 flex justify-between items-center gap-10">
      {navLinks.map((link) => (
        <a href={link.to} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
