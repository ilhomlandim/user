import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
function Header() {
  return (
    <header className="flex items-center justify-between container mx-auto">
      <Image src="../logo.svg" width={221} height={52} alt="Chizlab logo" />
      <Input
        type="text"
        placeholder="Qidiruv"
        className="w-24 pl-7 border border-black"
      />
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          className="bg-black text-white  hover:bg-slate-700">
          Ro‘yhatdan o‘tish
        </Button>
        <Button variant="outline" className="bg-transparent border-black">Kirish</Button>
      </div>
    </header>
  );
}

export default Header;
