"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Cross1Icon,
  EnterIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import KBD from "./KBD";
import { useEffect, useRef } from "react";
import { useAppStore } from "@/lib/zustand";
import Logo from "./Logo";

function Header() {
  const searchInput = useRef(null);
  const { setMobileNavbar, mobileNavbar } = useAppStore();

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

  function handleClick() {
    setMobileNavbar();
  }

  return (
    <header
      className={`lg:py-5 py-3 relative transition-colors duration-300 z-50 bg-white border-b ${
        mobileNavbar ? "border-b-slate-200" : "border-transparent"
      }`}
    >
      <div className="base-container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Logo type="header" />

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

        <Button
          onClick={handleClick}
          className="sm:hidden"
          size="icon"
          variant={mobileNavbar ? "default" : "outline"}
        >
          {mobileNavbar ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </Button>
      </div>
    </header>
  );
}

export default Header;
