"use client";

import Image from "next/image";
import { highlights } from "@/constants/highlight";

function Highlights() {
  return (
    <div className="flex w-full items-center gap-6 overflow-x-auto px-4 py-4 md:px-0 [&::-webkit-scrollbar]:hidden">
      {highlights.map((h) => (
        <div key={h.id} className="flex shrink-0 flex-col items-center gap-1.5">
          <div className="rounded-full border-2 border-[#262626] p-0.5">
            <div
              className={`flex size-15 items-center justify-center overflow-hidden rounded-full md:size-18`}
            >
              <Image
                src={h.icon}
                alt={h.label}
                width={36}
                height={36}
                className="size-9 object-contain md:size-10"
              />
            </div>
          </div>
          <span className="max-w-18 truncate text-xs text-[#737373]">
            {h.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export { Highlights };

