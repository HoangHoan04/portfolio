"use client";

import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface ImageProps extends Omit<NextImageProps, "onLoad"> {
  fallback?: string;
  containerClassName?: string;
}

function Image({
  className,
  containerClassName,
  alt,
  fallback,
  ...props
}: ImageProps) {
  const [error, setError] = useState(false);
  const isFill = props.fill;
  const hasSrc =
    typeof props.src === "string" ? props.src.length > 0 : !!props.src;

  const dims = isFill
    ? {
        width: undefined as number | undefined,
        height: undefined as number | undefined,
      }
    : { width: props.width, height: props.height };

  if ((error || !hasSrc) && fallback) {
    return (
      <div
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden text-sm font-semibold",
          containerClassName,
        )}
        style={{ width: dims.width, height: dims.height }}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      className={cn("overflow-hidden shrink-0", containerClassName)}
      style={{ width: dims.width, height: dims.height }}
    >
      <NextImage
        className={cn("size-full object-cover", className)}
        alt={alt}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
}

const AvatarImage = Image;
export { AvatarImage, Image };
export type { ImageProps };
