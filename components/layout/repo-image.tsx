"use client";

import { useState } from "react";

const FALLBACK_SRC = "/assets/others/no-image.svg";

export function RepoImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    // biome-ignore lint/performance/noImgElement: needs runtime onError fallback swap, which next/image doesn't support for this case
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(FALLBACK_SRC)}
      className="h-24 w-full object-contain"
    />
  );
}
