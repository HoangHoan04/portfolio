"use client";

import { highlights } from "@/constants/highlight";

function Highlights() {
  return (
    <div className="flex items-center gap-6 overflow-x-auto px-4 py-4 md:px-0 [&::-webkit-scrollbar]:hidden">
      {highlights.map((h) => (
        <div key={h.id} className="flex shrink-0 flex-col items-center gap-1.5">
          <div className="rounded-full border-2 border-[#262626] p-0.5">
            <div className="flex size-15 items-center justify-center overflow-hidden rounded-full bg-linear-to-br md:size-18">
              <div
                className={`flex size-full items-center justify-center rounded-full bg-linear-to-br ${h.gradient}`}
              >
                <span className="text-xs font-bold text-white md:text-sm">
                  {h.cover}
                </span>
              </div>
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
