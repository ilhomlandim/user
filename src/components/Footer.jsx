import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black pt-[71px] pb-[197px] px-24 mt-20">
      <div className="container mx-auto flex  justify-between flex-wrap gap-10">
        <div className="flex items-start flex-col gap-[45px] mt-4">
          <h2 className="text-white text-4xl">Bog‘lanish</h2>
          <ul className=" flex flex-col items-start gap-[25px]">
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Telefon
            </li>
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Email
            </li>
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Manzil
            </li>
          </ul>
        </div>
        <div className="flex items-start flex-col gap-[45px] mt-4">
          <h2 className="text-white text-4xl">Bo‘limlar</h2>
          <ul className=" flex flex-col items-start gap-[25px]">
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Chizmachilik
            </li>
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Dizayn
            </li>
          </ul>
        </div>
        <div className="flex  flex-col gap-[45px] mt-4">
          <h2 className="text-white text-4xl">Resurslar</h2>
          <ul className=" flex flex-col  gap-[25px]">
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Kitoblar
            </li>
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Maqolalar
            </li>
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Taqdimotlar
            </li>
            <li className="text-white text-2xl hover:underline hover:underline-offset-4 ">
              Videolar
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-6 gap-[31px]">
          <Image
            src="../white-logo.svg"
            width={221}
            height={52}
            alt="Chizlab logo"
          />
          <h4 className="text-white text-2xl  max-w-[380px]">
            Chizmachilik va dizayn sohasidagi O‘zbekistondagi ilk sayt
          </h4>
          <h4 className="text-white text-2xl max-w-[380px]">
            Mo‘tabarxon Muhammmadyusuf Mirzo Ulug‘bek
          </h4>
          <h3 className="text-white opacity-60 text-2xl">ChizLab 2024</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
