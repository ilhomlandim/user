"use client";
import Image from "next/image";
import logoImage from "/public/logo.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [burger, setBurger] = useState(true);
  const [isRegister, useIsRegister] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between container mx-auto flex-wrap px-2 gap-5">
        <div className="relative block h-[40px] w-[90px] sm:w-[160px] md:w-[200px]">
          <Image
            src={logoImage}
            alt="image"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <Input
          type="text"
          placeholder="Qidiruv"
          className="w-[70px] sm:w-[120px] sm:px-4 sm:py-1 md:px-4 md:w-[238px] text-center px-2  border border-black"
        />
        <div className=" items-center gap-3 hidden sm:flex">
          <Button
            variant="outline"
            className="bg-black text-white w-[120px] px-4 py-2  hover:bg-slate-700"
          >
            Ro‘yhatdan o‘tish
          </Button>
          <Button
            onClick={() => {
              setBurger(!burger);
            }}
            variant="outline"
            className="bg-transparent border-black"
          >
            Kirish
          </Button>
        </div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 15 15"
          className=" right-0 block sm:hidden  "
          fill="none"
          onClick={() => {
            setBurger(!burger);
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </header>
      {burger && (
        <aside className="w-full absolute h-full bottom-0  z-50 top-0 flex flex-col items-center justify-between py-6 bg-black">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            onClick={() => {
              setBurger(!burger);
            }}
            className="position absolute right-2 top-1 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="flex items-center gap-3 flex-col mx-auto py-4 px-3 bg-black">
            <Link href="/adabiyotlar" className="text-white">
              Adabiyotlar
            </Link>
            <Link href="/maqolalar" className="text-white">
              Maqolalar
            </Link>
            <Link href="/mualliflar" className="text-white">
              Mualliflar
            </Link>
            <Link href="/videolar" className="text-white">
              Videolar
            </Link>
          </div>
          <div className={isRegister ? "hidden" : "block"}>
            <div className="flex flex-col items-center gap-3">
              <Link href="/register" className="text-white ">
                Register
              </Link>
              <Link href="/login" className="text-white">
                Login
              </Link>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export default Header;
