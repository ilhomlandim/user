"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function MaterialPage() {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        console.log("Fetching data for ID:", id);
        const response = await fetch(
          `http://localhost:3000/api/materials/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch material");
        }

        const data = await response.json();
        setMaterial(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMaterial();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!material) return <p>No material found for ID: {id}</p>;

  return (
    <div className="p-4">
      <h1 className="text-[32px] font-bold">{material.title}</h1>
      <p className="text-[18px]">{material.authors?.join(", ")}</p>
      <img
        src={material.cover}
        alt={material.title}
        className="w-full max-w-[600px] mt-4"
      />
      <p className="mt-4">{material.description}</p>
    </div>
  );
}

export default MaterialPage;
