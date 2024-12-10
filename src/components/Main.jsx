import Link from "next/link";

function Main() {
  return (
    <main className="flex flex-col lg:flex-row items-center gap-5 justify-between container mx-auto mb-[334px] mt-8  px-4 lg:px-0">
      <div className="w-full lg:w-[883px] h-[315px] md:h-[449px] px-8 sm:px-16 bg-black rounded-tr-[146.5px] flex flex-col items-center flex-wrap justify-between rounded-b-[100px] relative group hover:bg-white hover:border-black hover:border transition-all">
        <h3 className="text-white font-normal mt-20 sm:mt-24 group-hover:text-black text-[30px] sm:text-[50px] text-center">
          ADABIYOT VA MAQOLALAR
        </h3>
        <Link
          href="#"
          className="text-white before:absolute before:inset-0 flex items-center gap-2 mb-3 text-[18px] sm:text-[24px] group-hover:text-black">
          Ro'yhati
          <svg
            width="35"
            className="text-white group-hover:text-black"
            height="25"
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
      <div className="w-full lg:w-[625px] h-[449px] flex flex-col items-center gap-4 transition-all">
        <div className="w-full h-[215px] group hover:bg-white hover:border-black hover:border bg-black rounded-tr-[146.5px] rounded-b-[100px] flex flex-col items-center justify-between relative">
          <h3 className="text-white font-normal mt-[57px] group-hover:text-black text-[30px] sm:text-[50px] text-center">
            TAQDIMOTLAR
          </h3>
          <Link
            href="#"
            className="text-white before:absolute before:inset-0 flex items-center gap-2 mb-3 group-hover:text-black text-[18px] sm:text-[24px]">
            Ro'yhati
            <svg
              width="35"
              className="text-white group-hover:text-black"
              height="25"
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
        <div className="w-full group h-[215px] bg-black rounded-tr-[146.5px] hover:bg-white hover:border-black hover:border rounded-b-[100px] flex flex-col items-center justify-between relative transition-all">
          <h3 className="text-white font-normal mt-[57px] text-[30px] sm:text-[50px] group-hover:text-black text-center">
            VIDEOLAR
          </h3>
          <Link
            href="#"
            className="text-white before:absolute before:inset-0 flex items-center gap-2 mb-3 group-hover:text-black text-[18px] sm:text-[24px]">
            Ro‘yhati
            <svg
              width="35"
              className="text-white group-hover:text-black"
              height="25"
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
    </main>
  );
}

export default Main;
