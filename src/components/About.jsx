import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

function About() {
  return (
    <section className=" mt-20 flex flex-col items-center gap-4 container mx-auto">
      <h2 className="text-[50px]">Ma’lumotlar makoni</h2>
      <div className="flex items-center gap-2 justify-between w-full ">
        <div className="w-[48%] h-[371px] bg-black rounded-tr-[224.5px] flex flex-col items-center gap-4 justify-between rounded-bl-[100px] rounded-br-[195.5px] relative group  hover:bg-white hover:border-black hover:border transition-all">
          <h3 className="text-white font-normal mt-[154px] group-hover:text-black text-[50px] ">
            CHIZMACHILIK
          </h3>
          <Link
            href="/Adabiyotlar"
            className="text-white before:absolute before:inset-0 flex items-center gap-2 mb-3 text-[24px] group-hover:text-black">
            Olami
            <svg
              width="45"
              className="text-white group-hover:text-black"
              height="35"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
        <div className="w-[48%] h-[371px] bg-black rounded-tr-[224.5px] flex flex-col items-center justify-between rounded-bl-[100px] rounded-br-[195.5px] relative group  hover:bg-white hover:border-black hover:border transition-all">
          <h3 className="text-white font-normal mt-[154px] group-hover:text-black text-[50px] mb-[15px]">
            DIZAYN
          </h3>
          <Link
            href="/Adabiyotlar"
            className="text-white before:absolute before:inset-0 flex items-center gap-2 mb-3 text-[24px] group-hover:text-black">
            Olami
            <svg
              width="45"
              className="text-white group-hover:text-black"
              height="35"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 w-full mt-10">
        <div className="w-[49%] h-[448px] border rounded-[8px] border-black">
          <Image src="../logo.svg" width={135} height={32} alt="Chizlab logo" />
          <h4 className="text-[24px] ">Chizmachilik va dizayn sohasidagi O‘zbekistondagi ilk sayt</h4>
          <h4 className="text-[24px] ">
            Saytda chizmachilik va dizaynga oid kitob,maqola,taqdimot va
            videolar jamlangan
          </h4>
          <Button>Batafsil</Button>
        </div>
        <div className="w-[49%] h-[448px] border rounded-[8px] border-black"></div>
      </div>
    </section>
  );
}

export default About;
