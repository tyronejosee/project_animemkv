"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";
import { routeMap } from "@/i18n/routes";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  locale: Locale;
}

export function DirectoryPagination({
  currentPage,
  totalPages,
  locale,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(
      `/${locale}/${routeMap.directory[locale]}?${params.toString()}`
    );
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        let pageNum = i + 1;
        if (totalPages > 5) {
          if (currentPage > 3) {
            pageNum = currentPage - 3 + i;
          }
          if (pageNum > totalPages) {
            pageNum = totalPages - (4 - i);
          }
        }

        const startPage = Math.max(
          1,
          Math.min(currentPage - 2, totalPages - 4)
        );
        const p = startPage + i;

        if (p > totalPages) return null;

        return (
          <Button
            key={p}
            variant={currentPage === p ? "default" : "outline"}
            onClick={() => goToPage(p)}
          >
            {p}
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
