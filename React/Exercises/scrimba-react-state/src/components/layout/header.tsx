import logo from "/logo.png";

export default function Header() {
  return (
    <div className="w-full shadow bg-white py-6 px-8 flex justify-center items-center border-b border-b-white gap-2">
      <img src={logo} alt="" className="h-18 w-16" />
      <p className="text-4xl">Chef Claud</p>
    </div>
  );
}
