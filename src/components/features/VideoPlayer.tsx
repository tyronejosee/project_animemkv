"use client";

import { Play } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  title: string;
}

const SERVERS = [
  { name: "Okru", url: "https://ok.ru/videoembed/5505300695633" },
  { name: "YourUpload", url: "https://www.yourupload.com/embed/placeholder" },
  { name: "Streamtape", url: "https://streamtape.com/e/placeholder" },
  { name: "Go", url: "https://gogoplay.io/streaming.php?id=placeholder" },
];

export function VideoPlayer({ title }: VideoPlayerProps) {
  const [selectedServer, setSelectedServer] = useState(SERVERS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {SERVERS.map((server) => (
          <Button
            key={server.name}
            onClick={() => setSelectedServer(server)}
            variant={
              selectedServer.name === server.name ? "default" : "outline"
            }
            size="default"
            className={cn(
              "transition-all",
              selectedServer.name === server.name && "shadow-md"
            )}
          >
            {server.name}
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
