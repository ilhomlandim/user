<div className="p-4 flex items-center justify-start gap-16 flex-wrap w-full">
  <img
    src={material.cover}
    alt={material.title}
    className="w-full max-w-[450px] mt-4 rounded-br-[43px] "
  />
  <div className="max-w-[550px] w-full">
    <h1 className="text-[18px] sm:text-[35px]  font-semibold sm:font-bold">
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
</div>;
