"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import logoImage from "/public/dark-logo.svg";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { buttonVariants } from "./ui/button";
import HeroTopLeftImg from "/public/hero-tl.svg";
import HeroTopRightImg from "/public/hero-tr.svg";
import { aboutInfo, publicResurs } from "@/constants";
import BottomLeftImg from "/public/aboutUsLeft.svg";

const sections = ["Adabiyotlar", "Taqdimotlar", "Maqolalar", "Videolar"];

export default function Sections() {
  return (
    <section className="py-10">
      <div className="base-container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-5">
          Ma'lumotlar makoni
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-10">
          <div
            className={
              "cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-56 text-black flex items-center justify-center relative rounded-br-[130px] overflow-hidden"
            }
            onClick={() => {
              redirect("/drawing");
            }}
          >
            <img
              className="absolute lg:inline-block hidden right-0 bottom-0"
              src={HeroTopLeftImg.src}
            />
            <h3 className="text-2xl text-center text-semibold uppercase group-hover:text-primary line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
              Chizmachilik
            </h3>
            <Link
              className="flex items-center gap-2 text-xl md:text-2xl absolute bottom-3 left-2/4 -translate-x-2/4 text-black group-hover:text-primary"
              href="/drawing"
            >
              Olami
              <ArrowRightIcon />
            </Link>
          </div>
          <div
            className={
              "cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-80 text-black flex items-center justify-center relative rounded-bl-[130px] overflow-hidden "
            }
            onClick={() => {
              redirect("/design");
            }}
          >
            <img
              className="absolute lg:inline-block hidden left-0 bottom-0"
              src={HeroTopRightImg.src}
            />
            <h3 className="text-2xl text-center text-semibold uppercase group-hover:text-primary line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
              Dizayn
            </h3>
            <Link
              className="flex items-center gap-2 text-xl md:text-2xl absolute bottom-3 left-2/4 -translate-x-2/4 text-black group-hover:text-primary"
              href="/design"
            >
              Olami
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="border border-primary py-14 px-7 rounded-lg bg-primary-foreground">
            <Image
              className="w-36 h-8 inline-block mb-10"
              src={logoImage}
              alt="chizlab.uz logo"
              priority
              width="220"
              height="50"
            />
            <p className="mb-5">
              Chizmachilik va dizayn sohasidagi O'zbekistondagi ilk platforma
            </p>
            <p className="mb-5">
              Saytda chizmachilik va dizaynga oid kitob,maqola,taqdimot va
              videolar jamlangan
            </p>
            <Link
              className={buttonVariants({
                variant: "default",
              })}
              style={{
                background: "#003837",
              }}
              href="/"
            >
              Batafsil
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {sections.map((title) => {
              return (
                <div
                  className="border border-primary p-5 rounded-lg min-h-52 lg:min-h-fit flex items-center justify-center bg-primary-foreground"
                  key={title}
                >
                  <h3 className="font-medium text-2xl text-center">{title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 
      
      
      */}
      <div className="base-container pt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-5">
          Ommabop resurslar
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-10">
          <div
            className={
              "cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-56 text-black flex items-center justify-center relative rounded-br-[130px] overflow-hidden"
            }
            onClick={() => {
              redirect("/design");
            }}
          >
            <img
              className="absolute lg:inline-block hidden right-0 bottom-0"
              src={HeroTopLeftImg.src}
            />
            <h3 className="text-2xl text-center text-semibold uppercase group-hover:text-primary line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
              Dizayn
            </h3>
            <Link
              className="flex items-center gap-2 text-xl md:text-2xl absolute bottom-3 left-2/4 -translate-x-2/4 text-black group-hover:text-primary"
              href="/design"
            >
              Olami
              <ArrowRightIcon />
            </Link>
          </div>

          <div
            className={
              "cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-80 text-black flex items-center justify-center relative rounded-bl-[130px] overflow-hidden "
            }
            onClick={() => {
              redirect("/drawing");
            }}
          >
            <img
              className="absolute lg:inline-block hidden left-0 bottom-0"
              src={HeroTopRightImg.src}
            />

            <h3 className="text-2xl text-center text-semibold uppercase group-hover:text-primary line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
              Chizmachilik
            </h3>
            <Link
              className="flex items-center gap-2 text-xl md:text-2xl absolute bottom-3 left-2/4 -translate-x-2/4 text-black group-hover:text-primary"
              href="/drawing"
            >
              Olami
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {publicResurs.map((value, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer border border-primary bg-expensive-green rounded-xl flex-col group min-h-40 sm:min-h-52 lg:min-h-[371px] text-black flex items-center justify-center relative ${value.borderRadius} overflow-hidden`}
                onClick={() => {
                  redirect(`${value.href}`);
                }}
              >
                <img
                  className={`absolute lg:inline-block hidden ${value.position} bottom-0`}
                  src={value.img.src}
                  alt={`${value.title} rasmi`}
                />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center font-normal text-white group-hover:text-primary line-clamp-1">
                  {value.title}
                </h3>
                <Link
                  className="flex items-center gap-2 text-base sm:text-lg lg:text-xl text-white group-hover:text-primary"
                  href={value.href}
                >
                  Ko'rish
                  <ArrowRightIcon />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="base-container pt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal my-16">
          Biz haqimizda
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutInfo.map(({ title, disc }, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-lg relative min-h-[250px] px-5 md:min-h-[371px] rounded-xl md:px-10 py-11 border border-black  flex flex-col gap-4"
              >
                <img
                  src={BottomLeftImg.src}
                  alt=""
                  className="absolute bottom-0 hidden md:flex right-0 w-28 aspect-square"
                />
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
                  {title}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 whitespace-pre-line">
                  {disc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
