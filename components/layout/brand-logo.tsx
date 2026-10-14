import Image from "next/image";
import { assetPath } from "@/lib/site-path";

type BrandLogoProps = {
  tone?: "burgundy" | "cream";
  priority?: boolean;
};

export function BrandLogo({ tone = "burgundy", priority = false }: BrandLogoProps) {
  return (
    <Image
      className="brandLogo"
      src={assetPath(`/assets/brand/virden-logo-${tone}.png`)}
      alt="VIRDEN"
      width={700}
      height={495}
      priority={priority}
      sizes="(max-width: 720px) 72px, 94px"
    />
  );
}
