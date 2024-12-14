"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { redirect } from "next/navigation";

const sections = [
  {
    title: "Adabiyotlar",
    path: "/litature",
  },
  {
    title: "Maqolalar",
    path: "/articles",
  },
  {
    title: "Taqdimotlar",
    path: "/presantations",
  },
  {
    title: "Videolar",
    path: "/videos",
  },
];

export default function Hero() {
  return (
    <section className="py-10">
      <div className="base-container grid grid-cols-1 gap-5 md:grid-cols-2">
        {sections.map(({ title, path }) => {
          return (
            <div
              className="bg-primary cursor-pointer hover:bg-primary-foreground border transition-colors duration-300 group min-h-52 md:min-h-40 lg:min-h-56 text-primary-foreground flex items-center justify-center rounded-b-[100px] rounded-tr-[150px] relative"
              onClick={() => {
                redirect(path);
              }}
              key={title}
            >
              <h2 className="text-2xl text-center text-semibold uppercase group-hover:text-primary line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <Link
                className="flex items-center gap-2 text-xl md:text-2xl absolute bottom-3 left-2/4 -translate-x-2/4 text-primary-foreground group-hover:text-primary"
                href={path}
              >
                Ro'yhati
                <ArrowRightIcon />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
