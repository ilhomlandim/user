import Link from "next/link";
function NavBar() {
  return (
    <nav className=" items-center justify-between mt-[58px] mb-[89px] container mx-auto sm:flex hidden">
      <Link href="/Adabiyotlar">Adabiyotlar</Link>
      <Link href="/Maqolalar">Maqolalar</Link>
      <Link href="/Taqdimotlar">Taqdimotlar</Link>
      <Link href="/Videolar">Videolar</Link>
      <Link href="/Mualliflar">Mualliflar</Link>
    </nav>
  );
}

export default NavBar;
