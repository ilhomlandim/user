"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchMaterialById } from "@/constants/request";
import { Skeleton } from "../../ui/skeleton";

function MaterialPage() {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function SkeletonCard() {
    return (
      <div className="mt-28 justify-center base-container flex items-center flex-wrap w-full gap-8">
        <div className="p-4 flex items-center justify-start gap-16 flex-wrap w-full">
          {/* Skeleton for the image */}
          <Skeleton className="w-full max-w-[450px] h-[560px] mt-4 rounded-br-[43px]" />

          {/* Skeleton for the content */}
          <div className="max-w-[550px] w-full">
            {/* Skeleton for the title */}
            <Skeleton className="h-[40px] w-full sm:w-[300px] mb-4" />

            {/* Skeleton for the authors */}
            <Skeleton className="h-[20px] w-[250px] mb-6" />

            {/* Skeleton for the published year and country */}
            <Skeleton className="h-[18px] w-[200px] mb-4" />
            <Skeleton className="h-[18px] w-[200px] mb-4" />

            {/* Skeleton for the summary */}
            <Skeleton className="h-[100px] w-full mb-4" />

            {/* Skeleton for the link */}
            <Skeleton className="h-[20px] w-[120px] mt-4" />
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMaterialById(5);
        setMaterial(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <SkeletonCard />;
  if (error) return <p>Error: {error}</p>;
  if (!material) return <p>No material found for ID: {id}</p>;

  return (
    <div className="base-container">
      <div className="mt-28 justify-around flex items-center flex-wrap w-full gap-8">
        {error && (
          <div className="text-red-600">
            <p>Error: {error}</p>
          </div>
        )}
        <div className="p-4 flex items-center justify-start gap-16 flex-wrap w-full">
          <img
            src={material.cover}
            alt={material.title}
            className="w-full max-w-[450px] mt-4 rounded-br-[43px]"
          />
          <div className="max-w-[550px] w-full">
            <h1 className="text-[18px] sm:text-[35px] font-semibold sm:font-bold">
              {material.title}
            </h1>
            <p className="text-[18px] mt-10">{material.authors?.join(", ")}</p>

            <p className="text-[16px] text-gray-600">{material.publishedAt}</p>
            <p className="text-[16px] text-gray-600">{material.country}</p>

            <p className="mt-4">{material.summary}</p>
            <a
              href={material.source}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 underline"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-20 bg-gray-100"></div>
    </div>
  );
}

export default MaterialPage;
