import Link from "next/link";
function NavBar() {
  return (
    <nav className="flex items-center justify-between mt-[58px] mb-[89px] container mx-auto"> 
      <Link className="font-[24px]" href="/Adabiyotlar">Adabiyotlar</Link>
      <Link className="font-[24px]" href="/Maqolalar">Maqolalar</Link>
      <Link className="font-[24px]" href="/Taqdimotlar">Taqdimotlar</Link>
      <Link className="font-[24px]" href="/Videolar">Videolar</Link>
      <Link className="font-[24px]" href="/Mualliflar">Mualliflar</Link>
    </nav>
  );
}

export default NavBar;
