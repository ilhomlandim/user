"use client";

import React, { useEffect, useState } from "react";
import { fetchMaterials } from "../../constants/request";
import { useRouter } from "next/navigation";

import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

function Materials() {
  const [materials, setMaterials] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const getMaterials = async () => {
      try {
        const data = await fetchMaterials();
        setMaterials(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getMaterials();
  }, []);

  return (
    <div className="base-container ">
      <div className="mt-28 justify-around flex items-center flex-wrap w-full gap-8 ">
        {error && (
          <div className="text-red-600">
            <p>Error: {error}</p>
          </div>
        )}
        {materials.length === 0 && !error ? (
          <>
            {Array.from({ length: 8 }).map((value, index) => (
              <Skeleton
                key={index}
                className="w-[294px] h-[414px] rounded-br-[43px] "
              />
            ))}
          </>
        ) : (
          materials.map((material, index) => (
            <div key={index} className=" mb-8 max-w-[294px] relative">
              <img
                src={material.cover}
                className="w-[294px] h-[414px] rounded-tl-none overflow-hidden  rounded-br-[43px]  border-black border"
                alt=""
              />
              <p className="text-[16px] mt-4 line-clamp-1">
                {material.authors?.join(", ")}
              </p>
              <h4 className="text-[24px]  w-[294px] h-20 text-black line-clamp-2">
                {material.title}
              </h4>
              <Link
                href={`/pages/materials/${material.id}`}
                className="after:absolute after:w-full  after:h-full after:top-0 after:left-0"
              >
                Learn more
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center items-center my-20 bg-gray-100"></div>
    </div>
  );
}

export default Materials;
