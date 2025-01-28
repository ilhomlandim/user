"use client";
import { Suspense, useState, useEffect } from "react";
import Hero from "../components/Hero";
import MaterialsSkleton from "../components/loaders/MaterialsSkleton";
import Materials from "../components/Materials";
import Sections from "../components/Sections";
import Loader from "../components/Loader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <Sections />
      <Suspense fallback={<MaterialsSkleton length={12} />}>
        <Materials />
      </Suspense>
    </>
  );
}
