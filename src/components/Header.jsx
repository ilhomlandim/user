"use client";
import Image from "next/image";
import logoImage from "/public/logo.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  EnterIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import KBD from "./KBD";
import { useEffect, useRef } from "react";

function Header() {
  const searchInput = useRef(null);
  useEffect(() => {
    function handlePress(e) {
      if (e.metaKey && e.keyCode === 75) {
        console.log(searchInput.current);
        e.preventDefault();
        searchInput.current.focus();
      }
    }

    if (searchInput) {
      window.addEventListener("keydown", handlePress);
    }

    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, []);

  return (
    <>
      <header className="lg:py-5 py-3">
        <div className="base-container flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              className="shrink-0 flex hover:opacity-80 active:opacity-60 transition-opacity"
              tabIndex="-1"
              href="/"
            >
              <Image
                className="lg:w-[220px] lg:h-[50px] w-[110px] h-[25px]"
                src={logoImage}
                alt="chizlab.uz logo"
                priority
                width="220"
                height="50"
              />
            </Link>

            <div className="relative lg:block hidden">
              <Input ref={searchInput} type="search" placeholder="Qidiruv..." />
              <KBD
                text="K"
                className="absolute right-2 top-2/4 -translate-y-2/4"
              ></KBD>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-5">
            <Button variant="outline">
              <span className="md:inline hidden">Ro'yhatdan o'tish</span>
              <PersonIcon className="inline md:hidden" />
            </Button>
            <Button>
              <span className="md:inline hidden">Kirish</span>
              <EnterIcon className="inline md:hidden" />
            </Button>
          </div>

          <Button className="lg:hidden" size="icon" variant="outline">
            <HamburgerMenuIcon />
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
