"use client";

interface HeaderPageProps {
  text: string;
}

export default function HeaderPageChild({ text }: HeaderPageProps) {
  return (
    <div className="relative mb-10 overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 size-72 rounded-full bg-[#0095f6]/20 blur-[100px] md:size-96" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] bg-[radial-gradient(#0095f6_1px,transparent_1px)] bg-size-[22px_22px] mask-[linear-gradient(to_bottom,black,transparent)]" />
      <h1 className="text-3xl font-extrabold tracking-tight">
        <span className="bg-linear-to-r from-white via-white to-[#0095f6] bg-clip-text text-transparent">
          {text}
        </span>
        <span className="ml-1.5 inline-block h-8 w-1.5 animate-pulse bg-[#0095f6] align-middle" />
      </h1>
      <div className="mt-4 h-px w-full bg-linear-to-r from-[#0095f6] via-[#1877f2]/40 to-transparent" />
    </div>
  );
}
