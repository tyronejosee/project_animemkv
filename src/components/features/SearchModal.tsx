"use client";

import { Loader2, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { api } from "@/lib/api";
import { Anime } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const search = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const data = await api.searchAnimes(query);
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(search, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <Card className="w-full max-w-2xl relative z-50 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b flex items-center gap-3">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            autoFocus
            placeholder="Buscar anime..."
            className="border-0 focus-visible:ring-0 px-0 text-lg h-auto shadow-none dark:bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-2">
          {loading ? (
            <div className="py-8 text-center text-muted-foreground">
              <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
              Buscando...
            </div>
          ) : results.length > 0 ? (
            <ScrollArea className="h-[60vh] max-h-[500px]">
              <div className="flex flex-col gap-1">
                {results.map((anime) => (
                  <Link
                    key={anime.id}
                    href={`/anime/${anime.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-16 shrink-0 rounded overflow-hidden relative">
                      <img
                        src={anime.coverImage}
                        alt={anime.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                        {anime.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span>{anime.type}</span>
                        <span>•</span>
                        <span>{anime.status}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollArea>
          ) : query.trim() ? (
            <div className="py-8 text-center text-muted-foreground">
              No se encontraron resultados para "{query}"
            </div>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              Escribe para buscar...
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
