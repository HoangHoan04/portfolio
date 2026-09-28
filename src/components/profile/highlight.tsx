"use client";

import Image from "next/image";
import { highlights } from "@/constants/highlight";

function Highlights() {
  return (
    <div className="flex w-full items-start gap-4 overflow-x-auto px-4 py-4 md:gap-5 md:px-1 [&::-webkit-scrollbar]:hidden">
      {highlights.map((h) => (
        <div
          key={h.id}
          className="flex w-[4.75rem] shrink-0 flex-col items-center gap-2 md:w-[5.5rem]"
        >
          <div className="rounded-full bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2.5px]">
            <div className="rounded-full bg-background p-[3px]">
              <div className="flex size-16 items-center justify-center rounded-full bg-white shadow-sm md:size-[4.5rem]">
                <Image
                  src={h.icon}
                  alt={h.label}
                  width={64}
                  height={64}
                  className="size-12 object-contain md:size-14"
                />
              </div>
            </div>
          </div>
          <span className="line-clamp-2 w-full text-center text-[11px] font-semibold leading-tight text-foreground md:text-xs">
            {h.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export { Highlights };
