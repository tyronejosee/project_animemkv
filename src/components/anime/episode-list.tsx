"use client";

import { ArrowUpDown, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Episode } from "@/types";

interface EpisodeListProps {
    episodes: Episode[];
    animeSlug: string;
    animeTitle: string;
}

export function EpisodeList({ episodes, animeSlug, animeTitle }: EpisodeListProps) {
    const [isDescending, setIsDescending] = useState(true);

    // Sort episodes based on the current order
    const sortedEpisodes = [...episodes].sort((a, b) => {
        return isDescending ? b.number - a.number : a.number - b.number;
    });

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Lista de episodios</h2>
                    <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => setIsDescending(!isDescending)}
                    >
                        <ArrowUpDown className="w-4 h-4" />
                        {isDescending ? "Mayor a Menor" : "Menor a Mayor"}
                    </Button>
                </div>

                <div className="space-y-2 mt-4">
                    {sortedEpisodes.map((ep) => (
                        <Link
                            href={`/ver/${animeSlug}-${ep.number}`}
                            key={ep.number}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                            <div className="relative w-20 h-12 rounded overflow-hidden shrink-0">
                                <img
                                    src={ep.image}
                                    alt={ep.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play className="w-4 h-4 text-white fill-current" />
                                </div>
                            </div>
                            <div className="flex justify-between w-full">
                                <div>
                                    <h3 className="font-medium group-hover:text-primary transition-colors">
                                        {animeTitle} {ep.number}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {ep.title}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        25-09-2025
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
