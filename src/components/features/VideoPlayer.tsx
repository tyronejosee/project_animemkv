"use client";

import { Play } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VideoSource } from "@/types";

interface VideoPlayerProps {
  title: string;
  sources: VideoSource[];
}

export function VideoPlayer({ title, sources }: VideoPlayerProps) {
  const [selectedServer, setSelectedServer] = useState<VideoSource | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (sources.length > 0 && !selectedServer) {
      setSelectedServer(sources[0]);
    }
  }, [sources, selectedServer]);

  if (!isPlaying) {
    return (
      <div
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group cursor-pointer border"
        onClick={() => setIsPlaying(true)}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black via-black/80 to-transparent">
          <p className="text-white font-semibold text-lg mb-1">{title}</p>
          <p className="text-muted-foreground text-sm">
            Haga clic para reproducir
          </p>
        </div>
      </div>
    );
  }

  if (!selectedServer) {
    return (
      <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center text-muted-foreground">
        No hay servidores disponibles
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {sources.map((server) => (
          <Button
            key={server.id}
            onClick={() => setSelectedServer(server)}
            variant={
              selectedServer.id === server.id ? "default" : "outline"
            }
            size="default"
            className={cn(
              "transition-all",
              selectedServer.id === server.id && "shadow-md"
            )}
          >
            {server.platform}
          </Button>
        ))}
      </div>

      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg border">
        <iframe
          src={selectedServer.url}
          title={title}
          className="w-full h-full border-none"
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      </div>
    </div>
  );
}
