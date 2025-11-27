"use client";

import { MessageCircle, Send, ThumbsUp, User } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

// Mock data for demonstration
const mockComments: Comment[] = [
  {
    id: "1",
    author: "Otaku Master",
    content: "¡Excelente episodio! La animación estuvo increíble en la escena de batalla.",
    timestamp: "Hace 2 horas",
    likes: 12,
  },
  {
    id: "2",
    author: "Anime Fan",
    content: "No puedo esperar al siguiente episodio, ese final me dejó con muchas ganas de más 😱",
    timestamp: "Hace 5 horas",
    likes: 8,
  },
  {
    id: "3",
    author: "Nakama",
    content: "La banda sonora de este episodio estuvo espectacular. ¿Alguien sabe el nombre de la canción?",
    timestamp: "Hace 1 día",
    likes: 5,
  },
  {
    id: "4",
    author: "Senpai Viewer",
    content: "Me encanta como están desarrollando a los personajes secundarios en esta temporada.",
    timestamp: "Hace 1 día",
    likes: 15,
  },
];

export function CommentsSection() {
  const [comments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement comment submission
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="border-b flex-shrink-0">
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Comentarios
          <span className="text-sm font-normal text-muted-foreground">
            ({comments.length})
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 p-0 flex flex-col min-h-0 overflow-hidden">
        {/* Comments List - Scrollable */}
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 py-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex gap-3 group hover:bg-muted/50 p-3 rounded-lg transition-colors"
              >
                {/* Avatar */}
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>

                {/* Comment Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-semibold text-sm">
                      {comment.author}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/90 mb-2">
                    {comment.content}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs gap-1.5 hover:text-primary"
                  >
                    <ThumbsUp className="w-3 h-3" />
                    {comment.likes}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Comment Input - Sticky at bottom */}
        <div className="border-t p-4 bg-background flex-shrink-0 sticky bottom-0">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Textarea
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[80px] resize-none"
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                Sé respetuoso con los demás usuarios
              </p>
              <Button
                type="submit"
                size="sm"
                disabled={!newComment.trim()}
                className="gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
