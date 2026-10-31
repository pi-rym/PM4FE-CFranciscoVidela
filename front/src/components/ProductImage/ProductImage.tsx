"use client";

import { useState } from "react";


interface ProductImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
}

export const ProductImage = ({
  src,
  alt,
  fallbackSrc,
}: ProductImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}     
      className="w-full h-48 object-contain mx-auto mt-4"
      onError={() => setImageSrc(fallbackSrc)}
    />
  );
};