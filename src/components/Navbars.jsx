import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export function Mobile() {
  return <div>Navbars</div>;
}

export function Desktop() {
  return (
    <nav className="base-container">
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
