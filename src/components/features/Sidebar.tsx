import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { News } from "@/types";

interface SidebarProps {
  news: News[];
}

export function Sidebar({ news }: SidebarProps) {
  return (
    <aside className="w-full lg:w-80 shrink-0 sticky top-20 h-fit">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Noticias Anime</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {news.map((item) => (
            <Link href={item.url} key={item.id} className="flex gap-3 group">
              <div className="w-20 h-20 shrink-0 rounded overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <Badge
                  variant="default"
                  className="text-[10px] font-bold w-fit mb-1"
                >
                  {item.category}
                </Badge>
                <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <span className="text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Placeholder for ads or other widgets */}
      <Card className="h-64 flex items-center justify-center">
        <CardContent>
          <span className="text-sm">Publicidad</span>
        </CardContent>
      </Card>
    </aside>
  );
}
