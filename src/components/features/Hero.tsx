import type { Anime } from "@/types";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";
import { Card } from "../ui/card";

interface HeroProps {
  animes: Anime[];
  locale: Locale;
  dict: {
    watchNow: string;
    statusMap: Record<string, string>;
    typeMap: Record<string, string>;
  };
}

export function Hero({ animes, locale, dict }: HeroProps) {
  if (!animes.length) return null;
  const featured = animes[0];

  return (
    <Card className="w-full h-[400px] relative overflow-hidden group">
      <Image
        src={featured.bannerImage || featured.coverImage}
        alt={featured.title}
        width={1920}
        height={1080}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="/images/placeholder.png"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent flex flex-col justify-end p-8">
        <h2 className="text-4xl font-bold text-foreground mb-2 drop-shadow-lg">
          {featured.title}
        </h2>
        <p className="text-muted-foreground line-clamp-2 mb-4 max-w-2xl drop-shadow-md">
          {featured.synopsis}
        </p>
        <div className="flex gap-2 mb-4">
          <Badge variant="default" className="font-bold shadow-sm">
            {dict.typeMap[featured.type] || featured.type}
          </Badge>
          <Badge variant="secondary" className="font-bold shadow-sm">
            {dict.statusMap[featured.status] || featured.status}
          </Badge>
        </div>
        <Button
          asChild
          size="lg"
          className="w-fit gap-2 shadow-lg hover:shadow-xl"
        >
          <Link href={`/${locale}/anime/${featured.slug}`}>
            <Play className="w-5 h-5 fill-current" />
            {dict.watchNow}
          </Link>
        </Button>
      </div>
    </Card>
  );
}
