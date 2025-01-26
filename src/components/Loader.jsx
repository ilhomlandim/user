import Logo from "@/../public/dark-logo.svg";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex fixed top-[10%] left-[40%] z-50 justify-center items-center min-h-screen">
      <Image
        src={Logo}
        width={500}
        height={300}
        priority
        alt="Loading..."
        className="animate-spin-back-and-forth"
      />
    </div>
  );
};

export default Loader;
