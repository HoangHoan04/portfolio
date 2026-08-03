import Image from "next/image";

import { getTechIcon, icons, type IconKey } from "@/constants/icons";
import { cn } from "@/lib/utils";

type TechIconProps = {
  name?: string;
  iconKey?: IconKey;
  size?: number;
  className?: string;
  alt?: string;
};

function TechIcon({ name, iconKey, size = 16, className, alt }: TechIconProps) {
  const src = iconKey ? icons[iconKey] : name ? getTechIcon(name) : undefined;

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt ?? name ?? iconKey ?? "tech icon"}
      width={size}
      height={size}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}

export { TechIcon };
