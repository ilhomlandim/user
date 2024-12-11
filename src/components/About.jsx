import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

function About() {
  return (
    <section className=" mt-20 flex flex-col items-center gap-4   container mx-auto px-3">
      <h2 className="text-[30px] md:text-[50px]">Ma’lumotlar makoni</h2>
      <div className="flex items-center gap-2 justify-center flex-wrap mt-5  w-full px-4 lg:grid lg:grid-cols-2 lg:grid-rows-4  ">
        <div className="w-full h-[271px]   2xl:h-[350px] lg:row-span-4 bg-black rounded-tr-[224.5px] flex flex-col items-center gap-4 justify-between rounded-bl-[100px] rounded-br-[195.5px] relative group  hover:bg-white hover:border-black hover:border transition-all">
          <h3 className="text-white font-normal mt-[94px] group-hover:text-black 2xl:text-[60px]  text-[26px]  sm:text-[35px]">
            CHIZMACHILIK
          </h3>
          <Link
            href="/Adabiyotlar"
            className="text-white before:absolute before:inset-0 flex items-center gap-2 mb-3 text-[24px] group-hover:text-black"
          >
            Olami
            <svg
              width="45"
              className="text-white group-hover:text-black"
              height="35"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="w-full h-[271px]   2xl:h-[350px] lg:row-span-4 bg-black rounded-tr-[224.5px] flex flex-col items-center justify-between rounded-bl-[100px] rounded-br-[195.5px] relative group  hover:bg-white hover:border-black hover:border transition-all">
          {" "}
          <h3 className="text-white font-normal mt-[94px] group-hover:text-black 2xl:text-[60px] text-[30px] mb-[15px] sm:text-[35px]">
            DIZAYN
          </h3>
          <Link
            href="/Adabiyotlar"
            className="text-white before:absolute before:inset-0 flex items-center gap-2 mb-3 text-[24px] group-hover:text-black"
          >
            Olami
            <svg
              width="45"
              className="text-white group-hover:text-black"
              height="35"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-around  gap-2 w-full flex-wrap mt-10 ">
        <div className="w-full max-w-[640px] sm:h-[448px] border rounded-[8px] border-gray-500 p-7 sm:px-[55px] sm:py-[69px] flex-col flex items-start gap-[30px]">
          <Image
            src="../logo.svg"
            width={135}
            height={32}
            alt="Chizlab logo"
            className="mb-4"
          />
          <h4 className="max-w-[380px]">
            Chizmachilik va dizayn sohasidagi O‘zbekistondagi ilk sayt
          </h4>
          <h4 className="max-w-[500px]">
            Saytda chizmachilik va dizaynga oid kitob,maqola,taqdimot va
            videolar jamlangan
          </h4>
          <Button asChild>
            <Link
              href="/login"
              className="hover:border px-11 py-5 hover:border-black font-extralight hover:bg-white hover:text-black"
            >
              Batafsil
            </Link>
          </Button>
        </div>
        <div className="flex flex-col w-full gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-4 md:grid-rows-2   max-w-[650px] ">
          <div className="flex rounded-[8px] flex-col items-center justify-center gap-[25px] border w-full sm:h-[214px]  border-gray-500 p-4  ">
            <h3 className="text-[20px]">Adabiyotlar</h3>
            <h5 className="text-[18px]">Chizmachilik/Dizayn</h5>
          </div>
          <div className="flex rounded-[8px] flex-col items-center justify-center gap-[25px] border w-full sm:h-[214px] border-gray-500 p-4 ">
            <h3 className="text-[20px]">Taqdimotlar</h3>
            <h5 className="text-[18px]">Chizmachilik/Dizayn</h5>
          </div>{" "}
          <div className="flex rounded-[8px] flex-col items-center justify-center gap-[25px] border w-full sm:h-[214px] border-gray-500 p-4 ">
            <h3 className="text-[20px]">Maqolalar</h3>
            <h5 className="text-[18px]">Chizmachilik/Dizayn</h5>
          </div>{" "}
          <div className="flex rounded-[8px] flex-col items-center justify-center gap-[25px] border w-full sm:h-[214px] border-gray-500 p-4 ">
            <h3 className="text-[20px]">Videolar</h3>
            <h5 className="text-[18px]">Chizmachilik/Dizayn</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
