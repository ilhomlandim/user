"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { useAppStore } from "@/lib/zustand";

export function Desktop() {
  return (
    <nav className="hidden base-container sm:block pt-5">
      <ul className="flex justify-between flex-wrap">
        {navLinks.map(({ path, text }) => {
          return (
            <li key={path}>
              <Link className={buttonVariants({ variant: "link" })} href={path}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export function Mobile() {
  const { mobileNavbar } = useAppStore();
  return (
    <div
      className={`sm:hidden duration-300 absolute w-full z-40 bg-slate-50 p-5 transition-transform ${
        mobileNavbar ? "translate-y-0 top-[60px]" : "-translate-y-full top-0"
      }`}
    >
      <nav className="base-container mb-5">
        <ul className="grid grid-cols-2 w-full">
          {navLinks.map(({ path, text }) => {
            return (
              <li className="w-full" key={path}>
                <Link
                  className={`${buttonVariants({ variant: "ghost" })} w-full`}
                  href={path}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-end gap-5">
        <Button variant="outline">Ro'yhatdan o'tish</Button>
        <Button>Kirish</Button>
      </div>
    </div>
  );
}
